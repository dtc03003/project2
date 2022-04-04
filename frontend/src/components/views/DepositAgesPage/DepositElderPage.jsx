import React from "react";
import Header from "../MainPage/Header";
import { Box } from "@mui/material";
import DeGoldLifeCard from "./DeGoldLifeCard";
import DeGoldLifeCard2 from "./DeGoldLifeCard2";
import DeGoldLifeCard3 from "./DeGoldLifeCard3";

const DepositElderPage = () => {
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
        <h4 style={{fontWeight:'bold', marginLeft:'5vh'}}>#노후보장 추천 금융상품</h4>
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
          src="img/노년층배경2.png"
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
        <h4 style={{fontWeight:'bold', marginLeft:'5vh'}}>#GoldenLife 노후를 편안하고 든든하게</h4>
      </Box>
      <Box styel={{}}>
        <DeGoldLifeCard></DeGoldLifeCard>
        <DeGoldLifeCard2></DeGoldLifeCard2>
        <DeGoldLifeCard3></DeGoldLifeCard3>
      </Box>
    </div>
  );
};

export default DepositElderPage;
