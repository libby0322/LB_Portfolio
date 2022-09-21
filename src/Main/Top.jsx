import React, {useRef } from 'react';
import Main from './Main';
import About from '../Page/About';
import Conctact from '../Page/Contact';
import Features from '../Page/Features';
import Portfolio from '../Page/Portfolio';
import * as Styled from "../Style/Style";
import styled from "styled-components";

const TopBar = styled.div`
    display: flex;
    width:100%;
    height:100px;
    background-color:rgba(255,255,255,.7);
    list-style-type: none;
    padding : 0;
    margin : 0;
    align-items:center;

`
    const Logo = styled.div`
    display: flex;
    padding: 5px 50px;
    font-family:'Roboto Mono', monospace;
    font-weight: 900;
    font-size: 40px;
    background: #fff;
    `
    const TopMenu = styled.div`
      display: flex;
      position: absolute;
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
    border-bottom: 2px dashed #f29a9a;
    opacity: 80%;
    background: #fff;
    font-family:'Roboto Mono', monospace;
    font-weight: 700;
    font-size: 30px;

    }
      
    `



const Top = () => {

    const OneRef = useRef();
    const TwoRef = useRef();
    const ThreeRef = useRef();
    const FourRef = useRef();

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



  return (
    <>
    <TopBar>
      <Logo>Libby's Portfolio </Logo>
      <TopMenu>
        <li onClick={onOneClick}>About</li>
        <li onClick={onTwoClick}>Features</li>
        <li onClick={onThreeClick}>Portfolio</li>
        <li onClick={onFourClick}>Contact</li>
        </TopMenu>
    </TopBar>
    <Main> </Main>
    <div ref={OneRef}>
      <About />
    </div>
    <div ref={TwoRef}>
      <Features />
    </div>
    <div ref={ThreeRef}>
      <Portfolio />
    </div>
    <div ref={FourRef}>
      <Conctact />
    </div>
    </>
  )
}

export default Top