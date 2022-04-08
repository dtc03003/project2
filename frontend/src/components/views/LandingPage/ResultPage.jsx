import React from 'react'
import { Link } from "react-router-dom";
import MicToWebPage from './MicToWebPage';
import "./Landing.css";
import Sori_Result from "./Sori_Result"
import Header_Top from "../MainPage/Header_Top"

const Landingpage = () => {
  return (
    <div className='LandingFull'>
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
      </div>
      <Sori_Result />
    </div>
  )
}

export default Landingpage