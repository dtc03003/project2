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
    <img style={{height:'22.7vh', width:'83vh'}} src="img/s골든라이프적금.png"/>
       {/* <h1 class="text-shadow">MOUNTAIN</h1> */}
    </div>
    <br></br>
    <div class="back" style={{color:'white ', paddingLeft:'2vh'}}> 
       <h4 style={{fontWeight:'bold'}}>S-골든라이프연금우대적금</h4>
       <div>
       <h6 style={{paddingTop:'1vh' ,fontWeight:'bold'}}>최고 연 2.15%(12개월)</h6>
       <h6 style={{paddingTop:'1vh'}}>연금이체하면 우대이율 제공</h6>
       <h6 style={{paddingTop:'1vh'}}>월 1만원 ~ 3백만원</h6>
       <h6 style={{paddingTop:'1vh'}}>특별중도해지서비스 제공</h6>
       <h6 style={{paddingTop:'1vh'}}>해지서비스 사유: 예금주 본인의 회갑, 칠순, 팔순, 창업, 퇴직, 입원(3일 이상), 해외여행, 이사</h6>
       </div>
    </div>
</div>
       <Button onClick={() => {
         DepoAlert()}}><h5 style={{fontWeight:'bold'}}>가입하기</h5></Button>
    </div>
  );
};

export default DeGoldLifeCard;