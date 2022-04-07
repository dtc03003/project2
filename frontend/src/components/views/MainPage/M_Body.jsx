import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { run as runHolder } from "holderjs/holder";
import { Link } from "react-router-dom";
import styles from "./MainPage.css";
import { Box, Button } from "@mui/material";
import MiniSori from "./MiniSori";

export default function M_Body() {
  return (
    <div className="m_body">
      <Carousel1></Carousel1>

      <div className="quickMenu">
        <ul className="listQuickMenu">
          <li>
            <Link to="/checkbalance">
              <span className="icoSearch" style={{ fontWeight: "bold" }}>
                조회하기
              </span>
            </Link>
          </li>
          <li>
            <a href="">
              <span className="icoTransfer" style={{ fontWeight: "bold" }}>
                이체하기
              </span>
            </a>
          </li>
          <li>
            <Link to="/deposit">
              <span className="icoLoan" style={{ fontWeight: "bold" }}>
                금융상품
              </span>
            </Link>
          </li>
          <li>
            <a href="">
              <span className="icoBank" style={{ fontWeight: "bold" }}>
                뱅킹관리
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sub_cont">
        <div className="main_notice">
          <div>
            <h3
              className="black"
              style={{ fontSize: "16px", fontWeight: "bold" }}
            >
              금융사고예방
            </h3>
            <ul id="noticeListUI">
              <li>
                <p>
                  <a href="" className="noticeDet">
                    전자금융사기예방 서비스
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="" className="noticeDet">
                    통장(카드) 매매•양도는 불법
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="" className="noticeDet">
                    사진촬영•QR스캔 절대금지
                  </a>
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="black"
              style={{ fontSize: "16px", fontWeight: "bold" }}
            >
              소비자 권익 보호
            </h3>
            <ul id="eventListUI">
              <li>
                <p>
                  <a href="" className="eventDet">
                    금융감독원 바로가기
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="" className="eventDet">
                    미수령주식 찾아주기 캠페인
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="" className="eventDet">
                    비교조회서비스
                  </a>
                </p>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className='black'>상품 공시실</h3>
            <ul id='productListUI'>
              <li>
                <span>2022.03.15</span>
                <p><a href='' className='gongsiDet'>[카드] 케이뱅크 X 해피포인트 체크카드</a></p>
              </li>
              <li>
                <span>2021.07.07</span>
                <p><a href='' className='gongsiDet'>[예금] 핫딜예금 X KB손해보험</a></p>
              </li>
              <li>
                <span>2021.07.01</span>
                <p><a href='' className='gongsiDet'>[예금] 코드K 자유적금(GS프레시몰 이벤트)</a></p>
              </li>
              <li>
                <span>2022.04.26</span>
                <p><a href='' className='gongsiDet'>[예금] 주거래우대 정기예금</a></p>
              </li>
            </ul>
            <a href='' className='user_more' id='event_more'>더보기</a>
          </div> */}
        </div>
      </div>
      <MiniSori></MiniSori>
    </div>
  );
}

function Carousel1() {
  useEffect(() => {
    runHolder("image-class-name");
  });

  return (
    <Carousel>
      <Carousel.Item>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexWrap: "wrap",
          }}
        >
          <img
            className="d-block w-100"
            src="img/mainimg1.png"
            alt="First slide"
          />
          <img
            style={{
              position: "absolute",
              paddingTop: "6.7%",
              zIndex: 2,
              width: "28.5%",
            }}
            src="img/가까이.gif"
          ></img>
        </Box>
      </Carousel.Item>
      <Carousel.Item>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexWrap: "wrap",
          }}
        >
          <img
            className="d-block w-100"
            src="img/mainimg1920.png"
            alt="Second slide"
          />
          <img
            style={{
              position: "absolute",
              paddingTop: "14%",
              zIndex: 2,
              width: "1.7%",
            }}
            src="img/lip.gif"
          ></img>
        </Box>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/mainimg4.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
