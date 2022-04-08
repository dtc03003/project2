import React from 'react'
import { Link } from "react-router-dom";
import "./Landing.css";
import Sori_Normal from "./Sori_Normal"
import Header_Top from "../MainPage/Header_Top"

const Landingpage = () => {
  return (
    <div className='L-body'>
      <div className="header" >
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
      </div>
      <Sori_Normal />
    </div>
  )
}

export default Landingpage