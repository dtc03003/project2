import axios from "axios";

// const BASE_URL = "http://j6d201.p.ssafy.io:9000/api/ai";
const BASE_URL = "http://localhost:9000/api/ai";

export function faceAI(image) {
    const headers = {
        "Access-Control-Allow-Origin" : "*"
    }

    const img = {
        image : image
    }

    console.log(image);
    const request = axios.post(`${BASE_URL}/recognize/face`, img, {headers: headers}).then(
        (res) => {
            console.log(res);
            console.log(res.data);
        }
    )

    return request;
}