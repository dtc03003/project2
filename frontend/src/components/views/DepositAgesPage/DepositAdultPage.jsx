import React from "react";
import Header from "../MainPage/Header";
import { Box } from "@mui/material";
import DeAdultCard from "./DeAdultCard";
import DeAdultCard2 from "./DeAdultCard2";
import DeAdultCard3 from "./DeAdultCard3";

const DepositAdultPage = () => {
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
        <h4 style={{fontWeight:'bold', marginLeft:'5vh'}}>#Adult 추천 금융상품</h4>
        <hr></hr>
      </Box>
      <Box>
        <img
          style={{
            paddingLeft: "45vh",
            height: "60vh",
            width: "76.5%",
            opacity: "0.95",
          }}
          src="img/청년층배경.png"
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
        <h4 style={{fontWeight:'bold', marginLeft:'5vh'}}>#직장인 재테크과 내집 마련의 꿈을 위해</h4>
      </Box>
      <Box styel={{}}>
        <DeAdultCard></DeAdultCard>
        <DeAdultCard2></DeAdultCard2>
        <DeAdultCard3></DeAdultCard3>
      </Box>
    </div>
  );
};

export default DepositAdultPage;
