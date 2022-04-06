import axios from "axios";
import Swal from 'sweetalert2'

const BASE_URL = "https://j6d201.p.ssafy.io:9000/api/ai";
// const BASE_URL = "http://localhost:9000/api/ai";

export function faceAI(image) {
    const headers = {
        "Access-Control-Allow-Origin" : "*"
    }
    const img = {
        image : image
    }
    const request = axios.post(`${BASE_URL}/recognize/face`, img, {headers: headers}).then(
        (res) => {
            sessionStorage.setItem("faceAge", res.data);
            window.location.href ='/faceloading';
        }
    )
    return request;
}

export function eventfaceAI(image) {
    const headers = {
        "Access-Control-Allow-Origin" : "*"
    }
    const img = {
        image : image
    }
    const request = axios.post(`${BASE_URL}/recognize/face`, img, {headers: headers}).then(
        (res) => {
            sessionStorage.setItem("eventFaceAge", res.data);
            Swal.fire({
                customClass: {
                    container: 'swal-container'
                },
                icon: 'info',
                html: `${sessionStorage.getItem("eventFaceAge")}`,
                toast: true,
                position: 'bottom-right',
                confirmButtonText: '네',
                })
            .then(() => {
                window.location.href='/main' //순위 페이지 만들어야디
            })
        }
    )
    return request;
}