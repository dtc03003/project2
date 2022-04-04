import React from 'react';
import './DepositCarousel.scss';
import { Button } from '@mui/material';

const DepositCarousel = () => {
  
  return (
    <div style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      minHeight:'500px',
      }}>
<div class="flip" >
    <div class="front">
    <img style={{height:'30vh', width:'37.2vh'}} src="img/상품-001.png"/>
       {/* <h1 class="text-shadow">MOUNTAIN</h1> */}
    </div>
    <div class="back"> 
       <h3>주택청약종합저축</h3>
       <div style={{paddingTop:'2vh'}}>
       <h5 style={{paddingTop:'2vh'}}>최고 연 2.5%(24개월)</h5>
       <h6 style={{paddingTop:'2vh'}}>내 집 마련 첫 걸음,주택청약종합저축</h6>
       <p style={{paddingTop:'2vh'}}>자격충족 시 민영주택청약,국민주택청약 모두 가능한 통장입니다.</p>
       <p style={{paddingTop:'2vh'}}>최대 96만원까지 연말정산 소득공제 혜택</p>
       <p style={{paddingTop:'2vh'}}>저축하며 내 집 마련하는 만능청약통장</p>
       </div>
    </div>
</div>
<div class="flip" >
    <div class="front">
    <img style={{height:'30vh', width:'37.2vh'}} src="img/상품3-001.png"/>
       {/* <h1 class="text-shadow">MOUNTAIN</h1> */}
    </div>
    <div class="back">
       <h3>S-골든라이프연금우대적금</h3>
       <div style={{paddingTop:'2vh'}}>
       <h5 style={{paddingTop:'2vh'}}>최고 연 2.15%(12개월)</h5>
       <h6 style={{paddingTop:'2vh'}}>연금 이체하면 우대이율 제공,골든라이프연금우대적금</h6>
       <p style={{paddingTop:'2vh'}}>편리하게 자유적립식 예금</p>
       <p style={{paddingTop:'2vh'}}>월 1만원 ~ 3백만원 저축 가능</p>
       <p style={{paddingTop:'2vh'}}>노년층을 위한 연금 우대 적금 서비스</p>
       </div>
    </div>
</div>
<div class="flip" >
    <div class="front">
    <img style={{height:'30vh', width:'37.2vh'}} src="img/상품2-001.png"/>
       {/* <h1 class="text-shadow">MOUNTAIN</h1> */}
    </div>
    <div class="back">
       <h3>S-내맘대로적금</h3>
       <div style={{paddingTop:'2vh'}}>
       <h5 style={{paddingTop:'2vh'}}>최고 연 2.75%(36개월)</h5>
       <h6 style={{paddingTop:'2vh'}}>내 맘대로 선택하는 우대 이율 조건 6가지</h6>
       <p style={{paddingTop:'2vh'}}>4가지 플랜 중 하나를 선택하여 보험서비스 무료 가입 혜택</p>
       <p style={{paddingTop:'2vh'}}>자유적립식과 정액적립식 원하는 대로 선택 가능</p>
       <p style={{paddingTop:'2vh'}}>상품에 관한 다양한 옵션을 제공함으로써 고객이 직접 상품 요건을 설계하여 가입할 수 있는 비대면채널 전용 DIY형 상품</p>
       </div>
    </div>
</div>
    </div>
  )
}

export default DepositCarousel