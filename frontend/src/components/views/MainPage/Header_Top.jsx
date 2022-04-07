import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import styles from "./MainPage.css";

export default function Header_Top() {
    if (localStorage.getItem("accessToken") === null) {
        return <UnLoginState/>
    }
    return <LoginState/>
}

function LoginState() {
    const [userName, setUserName] = useState('');
    const token = localStorage.getItem("accessToken")

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        axios.post('/api/user/info')
        .then((Response) => {
            setUserName(JSON.stringify(Response.data.name).slice(1, -1));
        })
        .catch((Error) => { 
            console.log(Error)
            localStorage.clear();
        }) 
    
    const navigate = useNavigate();
    const isLogout = () => {
        localStorage.clear();
        window.location.reload();
        navigate('/main');

    };
    
    return (
        <div style={{display:'flex',flexDirection:'row-reverse'}}>
            <button onClick={isLogout} style={{border:'none',borderRadius:'20px',color:'white',background:'rgb(0, 119, 255)'}}>로그아웃</button>
            <p style={{margin:'5px'}}>{userName} 님 환영합니다.</p>
        </div>
    )
}

function UnLoginState() {
    return (
        <div>
            <span className='login'>
                <Link to="/login">로그인</Link>
            </span>
            <span>
                <Link to="/signup" style={{textDecoration:'none',color:'black',paddingLeft:'1vh'}}>회원가입</Link>
            </span>
        </div>
    );
}

