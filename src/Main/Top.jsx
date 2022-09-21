import React, { useState, useEffect,useRef} from 'react';
import Main from './Main';
import About from '../Page/About';
import Conctact from '../Page/Contact';
import Features from '../Page/Features';
import Portfolio from '../Page/Portfolio';
import * as Styled from "../Style/Style";
import styled from "styled-components";


const Scrolling = styled.div`
height: 100vh;
overflow-y: auto;
-webkit-scrollbar{
  display: none;
}
.inner{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.divider {
  width: 100%;
  height: 5px;
  background-color: black;
}
`

export const TopBar = styled.div`
    overflow-y: hidden;
    display: flex;
    position: fixed;
    z-index: 999;
    width:100%;
    height:70px;
    background-color: beige;
    list-style-type: none;
    padding : 0;
    margin : 0;
    align-items:center;
    color: #439b43;
    font-weight: bolder;
   .topBtn{
    width: 50px;
    height: 50px;
    font-size: 30px;
    background-color: white;
    opacity: 0.5;
    font-weight: bold;
    border: none;
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 999;
   }
   .topBtn:hover{
    opacity: 0.8;
   }

`
    const Logo = styled.div`
    display: flex;
    padding: 5px 50px;
    font-family:'Roboto Mono', monospace;
    font-weight: 900;
    font-size: 40px;
    `
    const TopMenu = styled.div`
      display: flex;
      position: fixed;
      right: 50px;
    li{
     display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 25%;
    padding: 10px 10px;
    margin-left: 10px;
    margin-right: 10px;
    border: none;
    font-family:'Roboto Mono', monospace;
    font-weight: 700;
    font-size: 30px;
    }
     li:hover{
      font-size: 33px;
      font-weight: 900;
     } 
    `
const DIVIDER_HEIGHT = 5;





const Top = (props) => {


  
  let [modal, setModal] = useState(false);

  const menuOpen = (props) => {
    setModal(!modal);
  }


 const scrollRef = useRef();
    useEffect((props)=>{
      const wheelHandler = (e) => {
        e.preventDefault();
        const { deltaY } = e;
        const { scrollTop } = scrollRef.current; // 스크롤 위쪽 끝부분 위치
        const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
      
        if (deltaY > 0) {
          // 스크롤 내릴 때
          if (scrollTop >= 0 && scrollTop < pageHeight) {
            //현재 1페이지
          
            console.log("현재 1페이지, down");
            scrollRef.current.scrollTo({
              top: pageHeight + DIVIDER_HEIGHT,
              left: 0,
              behavior: "smooth",
            });
           
         
            
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
            //현재 2페이지
            console.log("현재 2페이지, down");
            scrollRef.current.scrollTo({
              top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
              left: 0,
              behavior: "smooth",
            });
            
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
            //현재 3페이지
            console.log("현재 3페이지, down");
            scrollRef.current.scrollTo({
              top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
              left: 0,
              behavior: "smooth",
            });
          } else {
            // 현재 4페이지
            console.log("현재 4페이지, down");
            scrollRef.current.scrollTo({
              top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
              left: 0,
              behavior: "smooth",
            });
          }
        } else {
          // 스크롤 올릴 때
          if (scrollTop >= 0 && scrollTop < pageHeight) {
            //현재 1페이지
            console.log("현재 1페이지, up");
            scrollRef.current.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
            //현재 2페이지
            console.log("현재 2페이지, up");
            scrollRef.current.scrollTo({
              top: pageHeight ,
              left: 0,
              behavior: "smooth",
            });
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
            //현재 3페이지
            console.log("현재 3페이지, up");
            scrollRef.current.scrollTo({
              top: pageHeight * 1 + DIVIDER_HEIGHT * 1,
              left: 0,
              behavior: "smooth",
            });
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
            //현재 4페이지
            console.log("현재 4페이지, up");
            scrollRef.current.scrollTo({
              top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
              left: 0,
              behavior: "smooth",
            });
          } else {
            // 현재 끝페이지
            console.log("현재 끝페이지, top");
            scrollRef.current.scrollTo({
              top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
              left: 0,
              behavior: "smooth",
            });
          }
        }
      };
      const scrollRefCurrent = scrollRef.current;
      scrollRefCurrent.addEventListener("wheel", wheelHandler);
      return()=>{
        scrollRefCurrent.removeEventListener("wheel", wheelHandler);
      };
    }, []);

    const OneRef = useRef();
    const TwoRef = useRef();
    const ThreeRef = useRef();
    const FourRef = useRef();
    const TopRef = useRef();

const onOneClick = () => {
  OneRef.current?.scrollIntoView({ behavior: 'smooth'});
};
const onTwoClick = () => {
  TwoRef.current?.scrollIntoView({ behavior: 'smooth'});
};
const onThreeClick = () => {
  ThreeRef.current?.scrollIntoView({ behavior: 'smooth'});
};
const onFourClick = () => {
    FourRef.current?.scrollIntoView({ behavior: 'smooth'});
  };
const TopClick = () =>{
    TopRef.current?.scrollIntoView({behavior:'smooth'});
};



  return (
    <>
    <TopBar ref={TopRef} >
      <Logo>Libby's Portfolio </Logo>
      <TopMenu>
        <li onClick={onOneClick}>About</li>
        <li onClick={onTwoClick}>Features</li>
        <li onClick={onThreeClick}>Portfolio</li>
        <li onClick={onFourClick}>Contact</li>
      </TopMenu>

        <button type='button' className='topBtn' onClick={TopClick}><i className="fa-sharp fa-solid fa-house"></i></button>
    </TopBar>
    
    <Scrolling ref={scrollRef}>
      <div className='inner'  ref={TopRef}>
    <Main >
      </Main>
    </div>
    <div className='inner' ref={OneRef}>
      <About/>
    </div>
    <div className="divider"></div>
    <div className='inner' ref={TwoRef}>
      <Features/>
    </div>
    <div className="divider"></div>
    <div className='inner' ref={ThreeRef}>
      <Portfolio/>
    </div>
    <div className="divider"></div>
    <div className='inner' ref={FourRef}>
      <Conctact/>
    </div>
    <div className="divider"></div>
    </Scrolling>
 
    </>
  )
}

export default Top