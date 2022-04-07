import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Webcam from "react-webcam";
// import { eventfaceAI } from '../../../_actions/naverClovar';
import Camera from "../../../assets/camera.png"
import "./FaceAI.css";

import axios from "axios";
import Swal from 'sweetalert2'
// import Rank from './EventRank';

const BASE_URL = "https://j6d201.p.ssafy.io:9000/api";

export default function EventAgePage() {
    const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [record, setRecord] = useState([]);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        eventfaceAI(imageSrc);
    }, [webcamRef]);

    return (
        <div id="faceAIPage">
            <div id="title">
                <h1 id="titleName">😆내 얼굴 나이는 몇 살일까?🤔</h1>
                <h3 className="faceAIInfo">카메라를 보고 사진기를 눌러주세요!</h3>
                <h5 className="faceAIInfo">재미로 보는 것이니 재미로 참여해주세요~🤪</h5>
                <input name="nickname" id="writeNick"
                    placeholder="결과를 기록하고 싶다면 닉네임을 입력해주세요" >
                </input>
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

            <div className='eventTable' id="eventShow">
                <h6 className="eventFont">재미로 보는 얼굴 나이 기록들</h6>
                <div className='eventTable'>
                    <div className="eventFont thread">순번</div>
                    <div className="eventFont thread">닉네임</div>
                    <div className="eventFont thread">얼굴나이</div>
            {/* <Rank record={record} /> */}
                </div>
            </div>
        </div>
        );
    };

    ReactDOM.render(<WebcamCapture />, document.getElementById("root"));
}

export function eventfaceAI(image) { //얼굴 인식
    const headers = {
        "Access-Control-Allow-Origin" : "*"
    }
    const img = {
        image : image
    }
    axios.post(`${BASE_URL}/ai/recognize/face`, img, {headers: headers}).then(
        (res) => {
            sessionStorage.setItem("eventFaceAge", res.data);
            Swal.fire({
                icon: 'info',
                html: `${sessionStorage.getItem("eventFaceAge")}세이시군요!<br>다른 사람들 결과도 보러갈까요??!🤗`,
                position: 'center',
                showDenyButton: true,
                confirmButtonText: '보러갈래요!',
                denyButtonText: `아니요`,
                })
            .then((result) => {
                if (result.isConfirmed) {
                    document.getElementById("eventShow").style.display = "block";
                    if(document.getElementById("writeNick").value.trim() !== '') {
                        console.log(document.getElementById("writeNick").value.trim());
                    }
                } else if (result.isDenied) {
                    window.location.href='/'
                }
            })
        }
    )
}

// export function writeRecord() { //정보 저장 및 조회
//     const headers = {
//         "Access-Control-Allow-Origin" : "*"
//     }

//     axios.post(`${BASE_URL}/event/record`, {headers: headers}).then(
//         (res) => {
//             sessionStorage.setItem("eventFaceAge", res.data);
//             Swal.fire({
//                 icon: 'info',
//                 html: `${sessionStorage.getItem("eventFaceAge")}세이시군요!<br>다른 사람들 결과도 보러갈까요??!🤗`,
//                 position: 'center',
//                 showDenyButton: true,
//                 confirmButtonText: '보러갈래요!',
//                 denyButtonText: `아니요`,
//                 })
//             .then((result) => {
//                 if (result.isConfirmed) {
//                     document.getElementById("eventShow").style.display = "block";
//                 } else if (result.isDenied) {
//                     window.location.href='/'
//                 }
//             })
//         }
//     )
// }

