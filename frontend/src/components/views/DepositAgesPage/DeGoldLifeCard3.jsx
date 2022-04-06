import React from "react";
import "./DeCard.scss";
import { Box, Button, Grid, } from "@mui/material";
import { fontWeight } from "@mui/system";

const DeGoldLifeCard3 = () => {
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
    <img style={{height:'22.7vh', width:'83vh'}} src="img/뷰티풀은퇴라이프적금.png"/>
       {/* <h1 class="text-shadow">MOUNTAIN</h1> */}
    </div>
    <br></br>
    <div class="back" style={{color:'white', paddingLeft:'2vh'}}> 
       <h4 style={{fontWeight:'bold'}}>뷰티풀 은퇴 라이프 적금</h4>
       <div>
       <h6 style={{paddingTop:'1vh' ,fontWeight:'bold'}}>최고 연 2.7%(24개월)</h6>
       <h6 style={{paddingTop:'1vh'}}>은퇴 후 목돈 굴리기용 적금</h6>
       <h6 style={{paddingTop:'1vh'}}>만 65세 이상 추가 우대</h6>
       <h6 style={{paddingTop:'1vh'}}>비상시 최대 2회 중도 출금 가능</h6>
       <h6 style={{paddingTop:'1vh'}}>비상 요인: 자녀의 대학 등록금, 결혼자금, 주택 구입 비용</h6>
       </div>
    </div>
</div>
       <Button><h5 style={{fontWeight:'bold'}}>가입하기</h5></Button>
    </div>
  );
};

export default DeGoldLifeCard3;