import React from 'react'
import Header from '../MainPage/Header.jsx'
import Footer from '../MainPage/Footer.jsx'

export default function Result(result) {

    if(result)
        return (
        <div>
            <Header/>
            <div>
                실패!
            </div>
            <Footer/>
        </div>
    )
    return (
        <div>
            <Header/>
            <div>
                성공!
            </div>
            <Footer/>
        </div>
    )
}