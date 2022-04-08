from sentence_transformers import SentenceTransformer, util
import numpy as np

model_path = '/workspace/S06P22D201/backend/fastapi/KoSentenceBERT_SKTBERT/output/training_sts'

embedder = SentenceTransformer(model_path)

# Corpus with example sentences
corpus = ['조회 페이지로 이동해줘.',
          '내 계좌 조회해줘.',
          '이체 페이지로 이동해줘.',
          '이체해줘.',
          '금융상품 추천해줘.',
          '예금 추천해줘.',
          '적금 추천해줘.',
          '예금 페이지로 이동해줘.',
          '적금 페이지로 이동해줘.',
          '상품 추천해줘.',
          '얼굴인식 해줘.']

keyword = ['조회', '조회', '이체', '이체', '금융', '금융', '금융', '금융', '금융', '추천', '추천']

corpus_embeddings = embedder.encode(corpus, convert_to_tensor=True)


def semanticSearch(query):
    # Find the closest 5 sentences of the corpus for each query sentence based on cosine similarity
    top_k = 1

    query_embedding = embedder.encode(query, convert_to_tensor=True)
    cos_scores = util.pytorch_cos_sim(query_embedding, corpus_embeddings)[0]
    cos_scores = cos_scores.cpu()

    # We use np.argpartition, to only partially sort the top_k results
    top_results = np.argpartition(-cos_scores, range(top_k))[0:top_k]

    result = corpus[top_results[0]].strip()

    for i in range(0, 11):
        if result == corpus[i]:
            return keyword[i]
