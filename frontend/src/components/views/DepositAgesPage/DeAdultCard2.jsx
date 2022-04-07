import React from "react";
import "./DeCard.scss";
import { Box, Button, Grid, } from "@mui/material";
import { fontWeight } from "@mui/system";
import DepoAlert from "./DepoAlert";

const DeAdultCard2 = () => {
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
    <img style={{height:'22.7vh', width:'83vh'}} src="img/월복리첫종잣돈.png"/>
       {/* <h1 class="text-shadow">MOUNTAIN</h1> */}
    </div>
    <br></br>
    <div class="back" style={{color:'white', paddingLeft:'2vh'}}> 
       <h4 style={{fontWeight:'bold'}}>S-월 복리 첫 재테크 예금</h4>
       <div>
       <h6 style={{paddingTop:'1vh' ,fontWeight:'bold'}}>최고 연 1.9%(12개월)</h6>
       <h6 style={{paddingTop:'1vh'}}>월 복리로 키우는 첫 종잣돈 마련</h6>
       <h6 style={{paddingTop:'1vh'}}>SBank Youth 고객 상품 패키지 가입 시 또는 </h6>
       <h6 style={{paddingTop:'1vh'}}>SBank 통장 급여이체 시 추가로 우대이율 최대 연 0.2%p 혜택</h6>
       <h6 style={{paddingTop:'1vh'}}>6개월, 12개월 계약기간</h6>
       </div>
    </div>
</div>
       <Button onClick={() => {
         DepoAlert()}}><h5 style={{fontWeight:'bold'}}>가입하기</h5></Button>
    </div>
  );
};

export default DeAdultCard2;