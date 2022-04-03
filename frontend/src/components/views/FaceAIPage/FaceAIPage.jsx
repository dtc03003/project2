import React from 'react';
import ReactDOM from 'react-dom';
import Webcam from "react-webcam";
import { faceAI } from '../../../_actions/naverClovar';
import Camera from "../../../assets/camera.png"
import "./FaceAI.css";

export default function FaceAI() {
    const WebcamCapture = () => {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        faceAI(imageSrc);
    }, [webcamRef]);

    return (
        <div id="faceAIPage">
            <div id="title">
                <h1 id="titleName">예적금 추천 서비스</h1>
                <h3 id="faceAIInfo">카메라를 보고 사진기를 눌러주세요!</h3>
            </div>

            <div id="webcam">
                <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                />
            </div>
            
            <div id="webcamBtn">
                <img src={Camera} onClick={capture} alt="Camera" className="cameraImg"/>
            </div>
        </div>
        );
    };

    ReactDOM.render(<WebcamCapture />, document.getElementById("root"));
}
