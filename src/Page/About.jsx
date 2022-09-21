import React, { useState, useEffect,useRef} from 'react';
import * as Styled from "../Style/Style";
import styled from "styled-components";
import { TopBar } from '../Main/Top';




const AboutMe = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    .container{
      display: flex;
      margin-top: 10px;
    }
    h1{
      margin-left: 2%;
      margin-top: 1%;
    }
    p{
      margin-top: -2%;
      margin-left: 5%;
      line-height: 1.7rem;
      width: 80%;
      justify-content: center;
      align-items: center;
    }

    .left {
      float: left;
      width: 50%;
      padding: 0rem 2rem;
      padding-bottom: 4rem;
      margin-top: 10%;
      margin-left: 2%;
      img{
        width: 45%;
        border-radius: 10%;
        height: 70%;
      }  
      .info_me{
        margin-top: 1.5rem;
        padding-left: 2rem;
        li{
          padding-bottom: 5px;
          i{
            margin-right: 10px;
          }
        }
      }
    }
    .right{
        float: right;
        width: 50%;
        padding: 2rem;
    ul{
      margin-top: 5%;
    }
    li{
      margin-top: 5%;
      font-family: 'Roboto Mono', monospace;
      span{
        font-family: 'Noto Sans KR', sans-serif;
        margin-left: 2%;
      }
      h3{
        font-size: 25px;
        margin-bottom: 1%;
      }
      i{
        font-size: 35px;
      }
    }
    }
    .rightBox{
      border-radius: 10px;
      margin-top: 15%;
      margin-left: -40%;
      margin-right: 3%;
      margin-bottom: 10%;
      padding: 5px;
      height: 72%;
    }
    .more{
        display: flex;
        li{
          padding-right: 10px;
        }
    }
   
`



const About = (props) => {

 

  return (
    <Styled.Container >
      <Styled.PageBack>
       
        <Styled.SlideIn>
        <Styled.Title>
        <h3>About Me</h3>
        </Styled.Title>
        <Styled.Line />
        <TopBar />
      </Styled.SlideIn>

    <AboutMe>
                <div className='container'>
                    <div className="left">
                      <img src="image/me01.jpg" alt="전신사진"/>
                      <ul className="info_me">
                        <li><i class="fa-solid fa-cake-candles"></i> 1995.03.22</li>
                        <li><i class="fa-solid fa-mobile-screen"></i> +82 10-2477-2739</li>
                        <li><i class="fa-solid fa-paper-plane"></i> l_libby@naver.com</li>
                        <li><i class="fa-brands fa-github"></i>https://github.com/libby0322</li>
                      </ul>

                    </div>
                    <div className="right">
                      <div className='rightBox'>
                      <h1>
                        <span>끊임없이 발전하는 개발자, 임리비입니다.</span>
                      </h1>
                      <br/>
                      <p>
                      노력은 결과를 낳아야 합니다. 그리고 제 성장이 그 결과라고 생각합니다.
결과는 저의 가치를 판단하며 어제보다 더 발전한 그 정도가 제 노력의 정도를 보여주기 때문입니다.
항상 모든 것을 완벽하게 해내겠다는 지키지 못할 약속은 하지 않겠습니다. 다만 분명히 말씀드릴 수 있는 것은 저는 끊임없이 성장하고 발전할 것입니다.
모든 순간에 최선의 노력으로 최선의 선택을 하며 반드시 오늘은 어제보다 발전한 새로운 성과를 내는 사람이 되겠습니다. 감사합니다.</p>

                    <ul>
                      <li>
                        <h3>Licenses</h3>
                        <span>자동차 운전면허 1종</span><br />
                        <span>웹디자인 기능사</span>
                        </li>
                    </ul>
                    <ul className='more'>
                      <li style={{listStyle:'none'}}><i className="fa-brands fa-github"></i></li>
                      <li style={{listStyle:'none'}}><i className="fa-brands fa-instagram"></i></li>
                      </ul>
                    </div>
                    </div>
                </div>  
              </AboutMe>


      </Styled.PageBack>
   </Styled.Container>
  )
}

export default About