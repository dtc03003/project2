import React from 'react'
import FaceLoading from "../../../assets/faceLoading.gif"
import "./FaceAI.css";

const FaceLoadingPage = () => {
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
  //링크는 후에 각 페이지 완성되면 변경 예정
  if(age != null) {
      if(age < 20) {
          window.location.href ='/main';
      }else if(age < 40) {
          window.location.href = '/login';
      }else {
          window.location.href = '/signup';
      }
  }
}

export default FaceLoadingPage