import React from "react";
import Header from "../MainPage/Header";
import { Box } from "@mui/material";
import DeKidCard from "./DeKidCard";
import DeKidCard2 from "./DeKidCard2";
import DeKidCard3 from "./DeKidCard3";
import Footer from "../MainPage/Footer";

const DepositKidPage = () => {
  return (
    <div>
      <Header></Header>
      <Box
        style={{
          padding: "5vh",
          marginLeft:'25vh',
          width: "50vh",
          height: "13vh",
        }}
      >
        <h4 style={{fontWeight:'bold', marginLeft:'5vh'}}>#Youth 추천 금융상품</h4>
        <hr></hr>
      </Box>
      <Box>
        <img
          style={{
            paddingLeft: "45vh",
            height: "60vh",
            width: "76.5%",
            opacity: "0.9",
          }}
          src="img/아이배경.png"
        />
      </Box>
      <Box
        style={{
          padding: "5vh",
          margin: "auto",
          width: "150vh",
          height: "20vh",
        }}
      >
        <hr></hr>
        <h4 style={{fontWeight:'bold', marginLeft:'5vh'}}>#Youth 우리 아이의 미래를 위한 준비</h4>
      </Box>
      <Box styel={{}}>
        <DeKidCard></DeKidCard>
        <DeKidCard2></DeKidCard2>
        <DeKidCard3></DeKidCard3>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default DepositKidPage;
