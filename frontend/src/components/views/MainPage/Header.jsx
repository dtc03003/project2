import React, { useState } from 'react'
import styles from './MainPage.css'
import { Link, useNavigate} from "react-router-dom";
import { Button } from 'bootstrap';
import axios from 'axios';

export default function Header() {
  
  return (
    <div className="header">
      <div className='top'>
        <h1 className="logo">
          <Link to="/main">
            {/* 로고 변경예정 */}
            <img src="https://www.kbanknow.com/resource/img/reform/layout/logo_kbank.png"></img>
          </Link>
        </h1>

        <div id="utill">
          <LoginText />
          
        </div>
      </div>

      <div className='gnb'>
        <ul className='topGnb'>
          {/* 추후 링크 추가 */}
          <li><Link to="/checkbalance">조회</Link></li>
          <li><Link to="/transfer">이체</Link></li>
          <li><Link to="/deposit">금융상품</Link></li>
          <li><a href=''>뱅킹관리</a></li>
        </ul>
      </div>
    </div>
  )
}

function LoginState() {
  const [userName, setUserName] = useState('');
  const token = localStorage.getItem("accessToken")

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    axios.post('/api/user/info')
      .then((Response) => {
        setUserName(JSON.stringify(Response.data.name).slice(1, -1));
      })
    .catch((Error) => { console.log(Error) }) 
  
  const navigate = useNavigate();
  const isLogout = () => {
    console.log("버튼 클릭됨")
    localStorage.clear();
    navigate('/');
  };
  
  return (
    <div>
        <button onClick={isLogout}>로그아웃</button>
        <p>{userName} 님 환영합니다.</p>
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
        <Link to="/signup">회원가입</Link>
      </span>
    </div>
  );
}

function LoginText() {
  if (localStorage.getItem("accessToken") === null) {
    return <UnLoginState/>
  }
  return <LoginState/>
}