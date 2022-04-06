// alert 창 추가 
// 처음 랜딩페이지에 캐릭터 뜨면서 도와드린다 이야기 설명(alert) 후 녹음 버튼에 대한 설명(alert)
// 녹음 버튼을 누르면 alert ex) 원하고자 하는 말을 하고 10초 뒤에 정지버튼을 눌러주세요
// 중간 로딩화면 딱히 없고, 가능하면 시간 몇초남았는지 (누나가 주기로함)
// 결과 창에서 set Timeout, alert을 주고 확인을 누르면(Toast도 있음) 결과 화면 보이기(폐기)
// 말풍선에 set Timeout을 주기 넌 할 수 있다.

// 로그인 컴포넌트로 땡겨오기, root, body 수정
import RecordRTC from "recordrtc";
import { useEffect, useState, useRef } from "react";
import RecordClick from "./Alert/RecordClick"
import RecordStop from "./Alert/RecordStop"
import MicIcon from '@mui/icons-material/Mic';

const reco =require('../../../sound/10초후확인버튼.mp3')
const SoundReco = new Audio(reco)
const playSoundReco = () => {
  SoundReco.play();
}

const PER_MS = 10000;
const MicToWebPage = () => {
  const [recording, setRecording] = useState(false);
  const recorder = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        audio: true
      })
      .then((stream) => {
        recorder.current = RecordRTC(stream, {
          type: "audio",
          mimeType: "audio/wav",
          recorderType: RecordRTC.StereoAudioRecorder,
          timeSlice: PER_MS,
          numberOfAudioChannels: 2,
          ondataavailable: (blob) => {
            // event fired PER_MS interval
            console.log("wav blob", blob);
            var xhr = new XMLHttpRequest();
            xhr.onload = function (e) {
              if (this.readyState === 4) {
                console.log("Server returned: ", e.target.responseText);
              }
            };
            var fd = new FormData();
            fd.append("file", blob, "voiceCommand");
            xhr.open("POST", "/fastapi/ai/voiceCommand", true)
              xhr.send(fd);
          }
        });
      });
  }, []);

  return (
    <div className="Mic">
      <button className="MicBtn" 
        onClick={() => {
          setRecording(() => {
            
            recorder.current.startRecording(); 
            RecordClick()
            playSoundReco()
            setTimeout(() => {
              recorder.current.stopRecording();
              RecordStop()
            }, 11000 )
          })
          }
        }
      ><MicIcon fontSize="large"/>녹음</button>
    </div>
  )
}

export default MicToWebPage

