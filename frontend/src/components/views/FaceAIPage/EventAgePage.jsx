import React from 'react';
import ReactDOM from 'react-dom';
import Webcam from "react-webcam";
import { eventfaceAI } from '../../../_actions/naverClovar';
import Camera from "../../../assets/camera.png"
import "./FaceAI.css";

export default function EventAgePage() {
    const WebcamCapture = () => {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        eventfaceAI(imageSrc);
    }, [webcamRef]);

    return (
        <div id="faceAIPage">
            <div id="title">
                <h1 id="titleName">내 얼굴 나이는 몇 살일까?</h1>
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
