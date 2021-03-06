import axios from "axios";

const BASE_URL = "https://j6d201.p.ssafy.io:9000/api/ai";

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