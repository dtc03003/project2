import React from 'react'
import styles from './MainPage.css'
import { Link ,useNavigate} from "react-router-dom";
import { Button } from 'bootstrap';

export default function Header() {

  const navigate = useNavigate();

  const isLogout = () => {
    localStorage.clear();
    navigate('/');
  };
  
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
          <span className='login'>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
            <button type='button' onClick={isLogout}>로그아웃</button>
          </span>
        </div>
      </div>

      <div className='gnb'>
        <ul className='topGnb'>
          {/* 추후 링크 추가 */}
          <li> <Link to="/transfer">조회</Link></li>
          <li><a href=''>이체</a></li>
          <li><a href=''>대출</a></li>
          <li><a href=''>뱅킹관리</a></li>
        </ul>
      </div>
    </div>
  )
}