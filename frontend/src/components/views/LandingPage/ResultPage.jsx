import React from 'react'
import { Link } from "react-router-dom";
import MicToWebPage from './MicToWebPage';
import "./Landing.css";
import Sori_Result from "./Sori_Result"

const Landingpage = () => {
  return (
    <div className='LandingFull'>
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
              {/* <button type='button' onClick={isLogout}>로그아웃</button> */}
            </span>
          </div>
        </div>
      </div>
      <Sori_Result />
    </div>
  )
}

export default Landingpage