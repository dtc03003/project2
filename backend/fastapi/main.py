from fastapi import FastAPI, File, UploadFile
from bin import inferenceFunc

app = FastAPI()


@app.post("/api/ai/voiceCommand")
async def executeCommand(file : UploadFile = File(...)):
    return inferenceFunc.stt(file)