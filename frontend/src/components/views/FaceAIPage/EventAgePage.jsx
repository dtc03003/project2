import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Webcam from "react-webcam";
import Camera from "../../../assets/camera.png"
import Back from "../../../assets/back.png"
import "./FaceAI.css";

import axios from "axios";
import Swal from 'sweetalert2'

const BASE_URL = "https://j6d201.p.ssafy.io:9000/api";

export default function Eventage() {
    const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [info, setInfo] = useState([]);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        const headers = {
            "Access-Control-Allow-Origin" : "*"
        }
        const img = {
            image : imageSrc
        }

        //얼굴 인식
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
                        showList();
                    } else if (result.isDenied) {
                        window.location.href='/'
                    }
                })
            }
        )

        function showList() {
            const nickname = document.getElementById("writeNick").value.trim();
            const participant = {
                    "nickname": nickname ? nickname : '',
                    "age": `${sessionStorage.getItem("eventFaceAge")}`
            }
            axios.post(`${BASE_URL}/event/record`, participant, {headers: headers})
                .then((result) => {
                    setInfo(result.data);
                })
        }

    }, [webcamRef]);

    const goback = () => window.location.href = '/main';

    return (
        <div id="faceAIPage">
            <div id="title">
                <h1 id="titleName">😆내 얼굴 나이는 몇 살일까?🤔</h1>
                <h4 className="faceAIInfo">카메라를 보고 사진기를 눌러주세요!</h4>
                <h5 className="faceAIInfo">재미로 보는 것이니 재미로 참여해주세요~🤪</h5>
                <input name="nickname" id="writeNick"
                    placeholder="결과를 기록하고 싶다면 닉네임을 입력해주세요" >
                </input>
            </div>

            <div id="eventWebcam">
                <Webcam
                style={{height:'60vh'}}
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                />
            </div>
            
            <div id="webcamBtn">
                <img src={Camera} onClick={capture} alt="Camera" className="ecameraImg"/>
                <img src={Back} onClick={goback} alt="Back" className="backImg"/>
            </div>

            <div className='eventTable' id="eventShow">
                <h6 className="eventFont">재미로 보는 얼굴 나이 기록들</h6>
                <table id="evtable" className='eventTable'>
                    <thead>
                        <tr>
                            <td>순번</td>
                            <td>닉네임</td>
                            <td>얼굴 나이</td>
                        </tr>
                    </thead>
                    <tbody>
                        {info.map((item) => (
                            <tr key={item.no}>
                                <td>{item.no}</td>
                                <td>{item.nickname}</td>
                                <td>{item.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
        );
    };

    ReactDOM.render(<WebcamCapture />, document.getElementById("root"));
}

