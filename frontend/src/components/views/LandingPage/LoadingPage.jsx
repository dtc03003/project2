import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import Loading from "../../../assets/Loading.gif";
import Header_Top from "../MainPage/Header_Top"

const LoadingPage = () => {
  const load = require("../../../sound/요청사항확인중.mp3");
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
        <div className='top'>
          <h1 className="logo">
            <Link to="/main">
              {/* 로고 변경예정 */}
              <img style={{width:'9.5vh', height:'4.5vh'}} src="img/SBankbackremove.png"></img>
            </Link>
          </h1>
          <div id="utill">
            <Header_Top />
          </div>
        </div>
      </div>
      <div className="loading">
        <img src={Loading} alt="Loading" />
        <h1>요청하신 사항을 확인하고 있습니다. 잠시만 기다려주세요...</h1>
      </div>
    </div>
  );
};
function moveInfo() {
  return (window.location.href = "/result");
}

export default LoadingPage;
