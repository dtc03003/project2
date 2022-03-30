import React from 'react'
import styles from './MainPage.css'

export default function Footer(){
  return (
    <footer id="footer" className='footer'>
      <div className='footer-inner'>
        <ul className='part-list'>
          <li><a>이용약관</a></li>
          <li><a>개인정보처리방침</a></li>
        </ul>
        <address>본 사이트의 콘텐츠는 저작권법의 보호를 받나? 무단 전재, 복사, 배포 등을 금지 안합니다.</address>
        <div className='footer-desc'>Copyright © S-BANK All Rights Reserved.</div>
      </div>
    </footer>
  )
}

