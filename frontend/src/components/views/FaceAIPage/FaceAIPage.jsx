import React from 'react'
import ReactDOM from 'react-dom';
import Webcam from "react-webcam";
import { faceAI } from '../../../_actions/naverClovar';

export default function FaceAI() {
        const WebcamCapture = () => {
        const webcamRef = React.useRef(null);
        const [imgSrc, setImgSrc] = React.useState(null);
        
        const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        faceAI(imageSrc);
    }, [webcamRef, setImgSrc]);

    return (
        <>
            <h1>얼굴 인식 API 구현중</h1>
            <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            />
            <button onClick={capture}>사진 찍기</button>
            {imgSrc && (
                <img src={imgSrc} alt="img for Face AI"/>
            )}
        </>
    );
};

    ReactDOM.render(<WebcamCapture />, document.getElementById("root"));
}