import React from "react";
import "./DeCard.scss";
import { Box, Button, Grid, } from "@mui/material";
import { fontWeight } from "@mui/system";

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
    <img style={{height:'22.7vh', width:'83vh'}} src="img/Syouth적금.png"/>
       {/* <h1 class="text-shadow">MOUNTAIN</h1> */}
    </div>
    <br></br>
    <div class="back" style={{color:'white', paddingLeft:'2vh'}}> 
       <h4 style={{fontWeight:'bold'}}>S-Youth 적금</h4>
       <div>
       <h6 style={{paddingTop:'1vh' ,fontWeight:'bold'}}>최고 연 2.3%(12개월)</h6>
       <h6 style={{paddingTop:'1vh'}}>어린이부터 시작하는 꾸준한 적립식 금융 교육</h6>
       <h6 style={{paddingTop:'1vh'}}>자녀가 성년이 될때 까지 장기거래 가능</h6>
       <h6 style={{paddingTop:'1vh'}}>어린이/청소년을 위한 무료 보험가입서비스 제공</h6>
       <h6 style={{paddingTop:'1vh'}}>월 저축금액 1만원~3백만원</h6>
       </div>
    </div>
</div>
       <Button><h5 style={{fontWeight:'bold'}}>가입하기</h5></Button>
    </div>
  );
};

export default DeGoldLifeCard;