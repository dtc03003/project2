import React from 'react'
import FaceLoading from "../../../assets/faceLoading.gif"
import "./FaceAI.css";

const FaceLoadingPage = () => {
  const load = require("../../../sound/분석중.mp3");
  const SoundLoading = new Audio(load);
  const playSoundLoading = () => {
    SoundLoading.play();
  };
  playSoundLoading();
  setTimeout(() => {
    moveInfo();
  }, 5000)

  return (
    <div id='faceLoadingPage'>
      <div className="loading">
        <img src={FaceLoading} alt="Loading" className="loadingImg"/>
        <p>분석중입니다! 잠시만 기다려주세요!</p>
      </div>
    </div>
  )
}

function moveInfo() {
  const age = sessionStorage.getItem("faceAge");
  if(age != null) {
      if(age < 20) {
          window.location.href ='/depositkid';
      }else if(age < 40) {
          window.location.href = '/depositadult';
      }else {
          window.location.href = '/depositelder';
      }
  }
}

export default FaceLoadingPage;