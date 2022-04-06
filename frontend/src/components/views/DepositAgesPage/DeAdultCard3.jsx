import React from "react";
import "./DeCard.scss";
import { Box, Button, Grid, } from "@mui/material";
import { fontWeight } from "@mui/system";

const DeAdultCard3 = () => {
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
    <img style={{height:'22.7vh', width:'83vh'}} src="img/S마이핏.png"/>
       {/* <h1 class="text-shadow">MOUNTAIN</h1> */}
    </div>
    <br></br>
    <div class="back" style={{color:'white', paddingLeft:'2vh'}}> 
       <h4 style={{fontWeight:'bold'}}>S-마이핏 통장</h4>
       <div>
       <h6 style={{paddingTop:'1vh' ,fontWeight:'bold'}}>최고 연 1.5%(12개월)</h6>
       <h6 style={{paddingTop:'1vh'}}>통장에 넣기만 해도 연이율과 출금,이체 수수료 면제까지</h6>
       <h6 style={{paddingTop:'1vh'}}>생활비 박스로 지출목표금액을 정해 계획적인 소비 관리</h6>
       <h6 style={{paddingTop:'1vh'}}>비상금 박스로 연 1.5%</h6>
       <h6 style={{paddingTop:'1vh'}}>만 18세 이상 만 38세 이하 실명의 개인(1인 1계좌)</h6>
       </div>
    </div>
</div>
       <Button><h5 style={{fontWeight:'bold'}}>가입하기</h5></Button>
    </div>
  );
};

export default DeAdultCard3;