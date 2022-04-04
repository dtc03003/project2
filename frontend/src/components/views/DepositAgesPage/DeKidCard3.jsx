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
    <div class="back" style={{color:'black', paddingLeft:'2vh'}}> 
       <h4 style={{fontWeight:'bold'}}>S-골든라이프연금우대적금</h4>
       <div>
       <h6 style={{paddingTop:'1vh' ,fontWeight:'bold'}}>최고 연 2.15%(12개월)</h6>
       <h6 style={{paddingTop:'1vh'}}>내 집 마련 첫 걸음,주택청약종합저축</h6>
       <h6 style={{paddingTop:'1vh'}}>자격충족 시 민영주택청약,국민주택청약 모두 가능한 통장입니다.</h6>
       <h6 style={{paddingTop:'1vh'}}>최대 96만원까지 연말정산 소득공제 혜택</h6>
       <h6 style={{paddingTop:'1vh'}}>저축하며 내 집 마련하는 만능청약통장</h6>
       </div>
    </div>
</div>
       <Button><h5 style={{fontWeight:'bold'}}>가입하기</h5></Button>
    </div>
  );
};

export default DeGoldLifeCard;