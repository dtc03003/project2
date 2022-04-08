import React from "react";
import Header from "../MainPage/Header";
import DepositCarousel from "./DepositCarousel";
import { Box } from "@mui/material";
import "./DepositPage.css";
import DepositTable from "./DepositTable";
import Footer from "../MainPage/Footer";
import MiniSori from "../MainPage/MiniSori";

const DepositPage = () => {
  return (
    <div>
      <Header></Header>
      <Box
        style={{
          height: "50px",
          // backgroundColor: "aliceblue",
          padding: "3vh",
          fontSize: "2vh",
          paddingLeft: "11vh",
          fontWeight: "bolder",
        }}
      >
        금융상품
      </Box>
      <hr style={{width:'17vh',marginLeft:'10vh'}}></hr>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "aliceblue",
          paddingLeft: "15vh",
          fontWeight: "bolder",
          fontSize: "3vh",
        }}
      >
        Sbank 고객님이 선택한 BEST 인기상품
        <br></br>
        <h5>가장 많이 사랑받은 인기상품입니다.</h5>
        <br></br>
      </Box>
      <Box className="carouselback">
        <DepositCarousel></DepositCarousel>
      </Box>
      <Box
        style={{
          height: "850px",
          // backgroundColor: "aliceblue",
          fontSize: "3vh",
          padding: "2vh",
        }}
      >
        <Box
          style={{
            display: "flex",
            paddingLeft: "13vh",
            fontWeight: "bolder",
            flexDirection: "column",
          }}
        >
          Sbank 만의 특별한 테마상품
          <br></br>
          <h5>각 연령대에 적합한 Sbank만의 특별한 테마 금융 서비스</h5>
        </Box>
        <DepositTable></DepositTable>
      </Box>
      <MiniSori></MiniSori>
      <Footer></Footer>
    </div>
  );
};

export default DepositPage;
