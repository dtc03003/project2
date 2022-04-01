import React from 'react';
import ReactDOM from 'react-dom';
import Webcam from "react-webcam";
import { faceAI } from '../../../_actions/naverClovar';
// import {CameraTwoTone} from '@ant-design/icons';
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
                <p id="titleName">예적금 추천 서비스</p>
                <p id="faceAIInfo">카메라를 보고 사진기를 눌러주세요!</p>
            </div>

            <div id="webcam">
                <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                />
            </div>
            
            <div id="webcamBtn">
                {/* twoToneColor="" <- 색 지정 */}
                <button onClick={capture}>임시버튼</button>
                {/* <CameraTwoTone onClick={capture} style={{ fontSize: '5em'}}/> */}
            </div>
        </div>
        );
    };

    ReactDOM.render(<WebcamCapture />, document.getElementById("root"));
}
