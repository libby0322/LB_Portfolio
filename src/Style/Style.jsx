import styled from "styled-components";

export const Box = styled.div`

width: 100%;
height: 100vh;
background-color: aquamarine;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
border: 1px solid red;
font-weight: bolder;
font-size: 30px;
    
`

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow: hidden;
    `
 export const PageBack = styled.div`
    position: relative;
    background-color: beige;
    width: 100%;
    height: 100vh;
    align-items: center;
    overflow: hidden;
    `

export const Line = styled.div`
  position: absolute;
  width: 40%;
  height: 5px;
  background-color: #f33333;
  margin-top: 135px;
  margin-left: 30px;
    animation-duration:  7s;
    animation-name: slidein_line;
    animation-iteration-count: 2; //재생횟수(반복값)
    /* animation-direction: alternate; */
    @keyframes slidein_line {
  from {
   display: none;
   left: -40; 
  }

  to {
    left: 20; 
  }
}

`
export const Title = styled.div`
  h3{
    position: absolute;
    margin-top: 70px;
    margin-bottom: 0;
    margin-left: 50px;
    font-size: 50px;
    width: 40%;
    height: 60px;
  }

`



//애니메이션 효과

export const FadeIn = styled.div` // 글자 애니메이션 페이드인
    span{
    animation-duration:  7s; // 몇초에 걸쳐 재생될지
    animation-name: fadein; 
    animation-iteration-count: infinite; //반복여부를 결정. 횟수 조정 가능
    /* animation-direction: alternate; */ // 다시 재생할 경우 순차로 할지 역방향으로 할지 여부
    @keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}
}
`

export const SlideIn = styled.div` //슬라이드
p{
    animation-duration:  7s;
    animation-name: slidein;
    animation-iteration-count: infinite; //재생횟수(반복값)
    /* animation-direction: alternate; */
    @keyframes slidein {
  from {
   opacity: 0;
   display: none;
   right: 10; //위치값을 우에서
  }

  to {
    opacity: 1;
    right: 300; //좌로 이동
  }
}
}
h3{
    animation-duration:  7s;
    animation-name: slidein_a;
    animation-iteration-count: infinite; //재생횟수(반복값)
    /* animation-direction: alternate; */
    /* animation-play-state: paused; */
    @keyframes slidein_a {
  from {
   opacity: 0;
   display: none;
   left: -40; 
  }

  to {
    opacity: 1;
    left: 20; 
  }
}
}
`
export const Brrr = styled.span`
display: flex;
position: absolute;
right: 90px;
font-size:13px;
width:10px;
height:15px;
text-align:center;
align-items: center;
font-weight: 700;
color: red;
p{
animation-duration:  0.5s;
animation-name: brrr;
animation-iteration-count: infinite;
animation-direction: alternate;
@keyframes brrr {
from {
margin-left: 20%;
}

to {
margin-left: -20%;
}
}
}
`
