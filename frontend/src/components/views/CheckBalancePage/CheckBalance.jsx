import React from 'react'
import Header from '../MainPage/Header.jsx'
import M_Body from './C_Body.jsx'
import Footer from '../MainPage/Footer.jsx'
import MiniSori from '../MainPage/MiniSori.jsx'

export default function CheckBalancePage(){
    return (
        <div>
            <Header/>
            <M_Body />
            <MiniSori />
            <Footer/>
        </div>
    )
}