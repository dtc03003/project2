# Copyright (c) 2020, Soohwan Kim. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import torch
import torch.nn as nn
import numpy as np
import torchaudio
import librosa
from torch import Tensor

from kospeech.vocabs.ksponspeech import KsponSpeechVocabulary
from kospeech.models import (
    SpeechTransformer,
    Jasper,
    DeepSpeech2,
    ListenAttendSpell,
    Conformer,
)


def parse_audio(file) -> Tensor:
    signal, _ = librosa.load(file.file, sr=16000)
    feature = torchaudio.compliance.kaldi.fbank(
        waveform=Tensor(signal).unsqueeze(0),
        num_mel_bins=80,
        frame_length=20,
        frame_shift=10,
        window_type='hamming'
    ).transpose(0, 1).numpy()

    feature -= feature.mean()
    feature /= np.std(feature)

    return torch.FloatTensor(feature).transpose(0, 1)


def stt(file):
    feature = parse_audio(file)
    input_length = torch.LongTensor([len(feature)])
    vocab = KsponSpeechVocabulary('data/vocab/aihub_character_vocabs.csv')

    model = torch.load('model.pt', map_location=lambda storage, loc: storage).to('cpu')
    if isinstance(model, nn.DataParallel):
        model = model.module
    model.eval()

    if isinstance(model, ListenAttendSpell):
        model.encoder.device = 'cpu'
        model.decoder.device = 'cpu'

        y_hats = model.recognize(feature.unsqueeze(0), input_length)
    elif isinstance(model, DeepSpeech2):
        model.device = 'cpu'
        y_hats = model.recognize(feature.unsqueeze(0), input_length)
    elif isinstance(model, SpeechTransformer) or isinstance(model, Jasper) or isinstance(model, Conformer):
        y_hats = model.recognize(feature.unsqueeze(0), input_length)

    sentence = vocab.label_to_string(y_hats.cpu().detach().numpy())
    return sentence
