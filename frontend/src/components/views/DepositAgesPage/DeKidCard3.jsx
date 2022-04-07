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
    <img style={{height:'22.7vh', width:'83vh'}} src="img/어린이자율통장.png"/>
       {/* <h1 class="text-shadow">MOUNTAIN</h1> */}
    </div>
    <br></br>
    <div class="back" style={{color:'white', paddingLeft:'2vh'}}> 
       <h4 style={{fontWeight:'bold'}}>S-Youth 어린이 자율 통장</h4>
       <div>
       <h6 style={{paddingTop:'1vh' ,fontWeight:'bold'}}>최고 연 1.1%(12개월)</h6>
       <h6 style={{paddingTop:'1vh'}}>어린이부터 시작하는 금융 교육</h6>
       <h6 style={{paddingTop:'1vh'}}>무료 유아교육 서비스를 제공하는 어린이 고객 맞춤 예금</h6>
       <h6 style={{paddingTop:'1vh'}}>'저금통'으로 특별우대이율 제공 및 자유로운 입출금 가능</h6>
       <h6 style={{paddingTop:'1vh'}}>1인 1계좌 가능</h6>
       </div>
    </div>
</div>
       <Button><h5 style={{fontWeight:'bold'}}>가입하기</h5></Button>
    </div>
  );
};

export default DeGoldLifeCard;