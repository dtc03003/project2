import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { run as runHolder } from 'holderjs/holder';
import { Link } from "react-router-dom";
import styles from './MainPage.css'

export default function M_Body() {

  return (
    <div className="m_body">
      <Carousel1></Carousel1>

      <div className='quickMenu'>
        <ul className='listQuickMenu'>
          <li><Link to="/checkbalance"><span className='icoSearch'>조회하기</span></Link></li>
          <li><a href=""><span className='icoTransfer'>이체하기</span></a></li>
          <li><a href=""><span className='icoLoan'>대출</span></a></li>
          <li><a href=""><span className='icoBank'>뱅킹관리</span></a></li>
        </ul>
      </div>

      <div className='sub_cont'>
        <div className='main_notice'>
          <div>
            <h3 className='black'>금융사고예방</h3>
            <ul id='noticeListUI'>
              <li>
                <p><a href='' className='noticeDet'>전자금융사기예방 서비스</a></p>
              </li>
              <li>
                <p><a href='' className='noticeDet'>통장(카드) 매매•양도는 불법</a></p>
              </li>
              <li>
                <p><a href='' className='noticeDet'>사진촬영•QR스캔 절대금지</a></p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='black'>소비자 권익 보호</h3>
            <ul id='eventListUI'>
              <li>
                <p><a href='' className='eventDet'>금융감독원 바로가기</a></p>
              </li>
              <li>
                <p><a href='' className='eventDet'>미수령주식 찾아주기 캠페인</a></p>
              </li>
              <li>
                <p><a href='' className='eventDet'>비교조회서비스</a></p>
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

    </div>
  )
}


function Carousel1() {
  useEffect(() => { runHolder('image-class-name'); });

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/1600x500?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/1600x500?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/1600x500?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}


