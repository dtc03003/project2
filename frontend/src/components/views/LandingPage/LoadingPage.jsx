import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import Loading from "../../../assets/Loading.gif";

const LoadingPage = () => {
  const load = require("../../../sound/분석중.mp3");
  const SoundLoading = new Audio(load);
  const playSoundLoading = () => {
    SoundLoading.play();
  };
  playSoundLoading();
  setTimeout(() => {
    moveInfo();
  }, 5000);
  return (
    <div className="LandingFull">
      <div className="header">
        <div className="top">
          <h1 className="logo">
            <Link to="/main">
              {/* 로고 변경예정 */}
              <img src="https://www.kbanknow.com/resource/img/reform/layout/logo_kbank.png"></img>
            </Link>
          </h1>

          <div id="utill">
            <span className="login">
              <Link to="/login">로그인</Link>
              <Link to="/signup">회원가입</Link>
              {/* <button type='button' onClick={isLogout}>로그아웃</button> */}
            </span>
          </div>
        </div>
      </div>
      <div className="loading">
        <img src={Loading} alt="Loading" />
        <h1>분석중입니다! 잠시만 기다려주세요...</h1>
      </div>
    </div>
  );
};
function moveInfo() {
  return (window.location.href = "/result");
}

export default LoadingPage;
