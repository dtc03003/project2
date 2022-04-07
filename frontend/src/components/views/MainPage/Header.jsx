import React from 'react'
import styles from './MainPage.css'
import { Link } from "react-router-dom";
import { Button } from 'bootstrap';
import Header_Top from './Header_Top';


export default function Header() {
  
  return (
    <div className="header">
      <div className='top'>
        <h1 className="logo">
          <Link to="/main">
            {/* 로고 변경예정 */}
            <img style={{width:'9.5vh', height:'4.5vh'}} src="img/SBankbackremove.png"></img>
          </Link>
        </h1>

        <div id="utill">
          <Header_Top />
        </div>
      </div>

      <div className='gnb'>
        <ul className='topGnb'>
          {/* 추후 링크 추가 */}
          <li><Link to="/checkbalance">조회</Link></li>
          <li><Link to="/transfer">이체</Link></li>
          <li><Link to="/deposit">금융상품</Link></li>
          <li><a href=''>뱅킹관리</a></li>
        </ul>
      </div>
    </div>
  )
}
