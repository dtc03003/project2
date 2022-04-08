from fastapi import FastAPI, File, UploadFile
from bin import inferenceFunc
from kobert.SemanticSearch import semanticSearch

app = FastAPI()


@app.post("/fastapi/ai/voiceCommand")
async def executeCommand(file : UploadFile = File(...)):
    query = inferenceFunc.stt(file)
    return semanticSearch(query)