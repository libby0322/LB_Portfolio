import React from 'react'
import * as Styled from "../Style/Style";
import styled from "styled-components";

const MainWrap = styled.div`
  width: 100%;
  height: 100vh;
  background: beige;
  overflow: hidden;
`
const MainTitle = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    color: #439b43;
    font-family: 'Sunflower', sans-serif;
    position: relative;
    .homeTitleSm{
    position: absolute;
    top: 300px;
    font-size: 50px;
    font-weight: bolder;
    font-family: 'Sunflower', sans-serif;
  }
  .homeTitleLg{
    position: absolute;
    top: 400px;
    font-size: 30px;
    font-weight: 700;
  }
  p{
    position: absolute;
    top:500px;
    right: 300px;
    font-size: 20px;
    font-weight: 500;
    border: 3px solid white;
    border-radius: 5px;
    padding: 5px;
  }
  p:hover{
    background: #eee;
    color: #222;
    opacity: 0.6;
    font-weight: 700;
  }
`

const Main = () => {
  return (
    <Styled.Container>
      <MainWrap>
      <Styled.FadeIn>
      <MainTitle >
      <span className="homeTitleSm">Welcome</span>
      <span className="homeTitleLg">안녕하세요, 임리비입니다. </span>
      </MainTitle>
      </Styled.FadeIn>
      <Styled.SlideIn>
        <MainTitle>
        <p>상단 메뉴버튼을 클릭하시면 해당 페이지로 이동합니다</p>
        </MainTitle>
      </Styled.SlideIn>
      
      </MainWrap>
    </Styled.Container>
  )
}

export default Main