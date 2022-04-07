import React from "react";
import "./DeCard.scss";
import { Box, Button, Grid, } from "@mui/material";
import { fontWeight } from "@mui/system";
import DepoAlert from "./DepoAlert";

const DeGoldLifeCard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        margin: "2vh",
      }}
    >
      <div class="flipca" >
    <div class="front">
    <img style={{height:'22.7vh', width:'83vh'}} src="img/내아이를위한280일.png"/>
       {/* <h1 class="text-shadow">MOUNTAIN</h1> */}
    </div>
    <br></br>
    <div class="back" style={{color:'white', paddingLeft:'2vh'}}> 
       <h4 style={{fontWeight:'bold'}}>내 아이를 위한 280일 적금</h4>
       <div>
       <h6 style={{paddingTop:'1vh' ,fontWeight:'bold'}}>최고 연 2.5%(12개월)</h6>
       <h6 style={{paddingTop:'1vh'}}>태어날 아이를 위한 임산부 맞춤형 상품</h6>
       <h6 style={{paddingTop:'1vh'}}>출산을 앞둔 아이와 교감하는 280일 동안 전용화면을 통해 육아 관련 부가서비스 제공</h6>
       <h6 style={{paddingTop:'1vh'}}>월 1만원~100만원</h6>
       <h6 style={{paddingTop:'1vh'}}>자유적립식 예금</h6>
       </div>
    </div>
</div>
       <Button onClick={() => {
         DepoAlert()}}><h5 style={{fontWeight:'bold'}}>가입하기</h5></Button>
    </div>
  );
};

export default DeGoldLifeCard;