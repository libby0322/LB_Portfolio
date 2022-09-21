import React from 'react'
import * as Styled from "../Style/Style";
import styled from "styled-components";

const SkillBox = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  .container{
      margin-left: 2rem;
       padding-top: 8rem;
        .title{
            margin-bottom: 2rem;
            padding-left: 1rem;
                h4{
                    font-size: 1rem;
                    color: #9dd84b;
                }
                h2{
                font-size: 2rem;
                padding-left: 1rem;
                  
                }
        }
      }
`
const Skill = styled.div`
  .skills{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    .used:hover, .learn:hover{
              background-color: #fff;
              box-shadow: 1px 1px 2px #9dd84b,
                   0 0 25px #9dd84b,
                   0 0 5px #9dd84b;
                   border: none;
            }
    .used, .learn{
      border: 3px dashed #9dd84b;
      border-radius: 30px;
      margin: 0 10px;
      width: 50%;
      padding: 2rem;
      h3{
        margin-bottom: 1rem;
        span{
          color: #9dd84b;
        }
      }
      ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: space-around;
        list-style: none;
        margin-left: -2rem;
        li{
            margin:7px;
            .cont {
              width: 100px;
              height: 100px;
              perspective: 300px;
                .item{
                    border: none;
                    font-size: 35px;
                    backface-visibility: hidden;
                    transition: 1s;
                }
                    .item.front {
                      position: absolute;
                      transform: rotateY(0deg);
                      text-align: center;
                    }
                    .item.back {
                      transform: rotateY(-180deg);
                      position: relative;
                      text-align: center;

                      img{
                          opacity: 0.5;
                          transform: scaleX(-1);
                          width: 100px;
                          height: 100px;
                      }
                      span{
                        position:absolute;
                        top: 50%;
                        left: 50%;
                        font-weight: bolder;
                        text-shadow: 2px 2px 6px gray;
                      }
                      .a, .aa{
                          color: red;
                          transform: translate(-50%, -60%);
                      }
                      .b{
                          color: blue;
                          transform: translate(-35%, -60%);
                      }
                      .c{
                          color: yellow;
                          transform: translate(-50%, -80%);
                      }
                    }
                    

            }
           
            .cont:hover .item.front {
              transform: rotateY(180deg);
            }


            .cont:hover .item.back {
              transform: rotateY(0deg);
            }

        }
      }
    }
  }
`


const Features = () => {
  return (
    <Styled.Container>
    <Styled.PageBack>
    <Styled.SlideIn>
        <Styled.Title>
        <h3>Featuers</h3>
        </Styled.Title>
        <Styled.Line />
      </Styled.SlideIn>
      <SkillBox>
      <div className="container">
          <div className="title">
              <h2>Skills </h2>
          </div>
          </div>
          <Skill>
            
            <div className='skills'>
              <div className='used'>
                <h3><span>l</span> Web</h3>
                <ul>
                  <li>
                        <div className="cont">
                          <div class="item front">
                             <img src="../image/used1.png" alt="html_logo"></img>
                          </div>
                          <div class="item back">
                            <img src="../image/used1.png" alt="html_logo"></img><span className="a">A</span>
                          </div>
                        </div>
                  </li>
                  <li>
                        <div className="cont">
                          <div class="item front">
                             <img src="../image/used2.png" alt="css_logo"></img>
                          </div>
                          <div class="item back">
                            <img src="../image/used2.png" alt="css_logo"></img><span className="a">A</span>
                          </div>
                        </div>
                  </li>
                  <li>
                        <div className="cont">
                          <div class="item front">
                             <img src="../image/used3.png" alt="js_logo"></img>
                          </div>
                          <div class="item back">
                            <img src="../image/used3.png" alt="js_logo"></img><span className="a">A</span>
                          </div>
                        </div>
                  </li>
                  <li>
                        <div className="cont">
                          <div class="item front">
                             <img src="../image/used4.png" alt="jq_logo"></img>
                          </div>
                          <div class="item back">
                            <img src="../image/used4.png" alt="jq_logo"></img><span className="a">A</span>
                          </div>
                        </div>
                  </li>
                  <li>
                        <div className="cont">
                          <div class="item front">
                             <img src="../image/used5.png" alt="react_logo"></img>
                          </div>
                          <div class="item back">
                            <img src="../image/used5.png" alt="react_logo"></img><span className="a">A</span>
                          </div>
                        </div>
                  </li>
                  <li>
                        <div className="cont">
                          <div class="item front">
                             <img src="../image/used6.png" alt="sc_logo"></img>
                          </div>
                          <div class="item back">
                            <img src="../image/used6.png" alt="sc_logo"></img><span className="a" style={{transform: "translate(-20%, -80%)"}}>A</span>
                          </div>
                        </div>
                  </li>
                  <li>
                        <div className="cont">
                          <div class="item front">
                             <img src="../image/used7.png" alt="bs_logo"></img>
                          </div>
                          <div class="item back">
                            <img src="../image/used7.png" alt="bs_logo"></img><span className="a">A</span>
                          </div>
                        </div>
                  </li>
                  
                </ul>
              </div>
              <div className="learn">
                <h3><span>l</span> ETC</h3>
                <ul>
                  <li>
                    <div className="cont">
                      <div class="item front">
                          <img src="../image/excel.png" alt="vue_logo"></img>
                      </div>
                      <div class="item back">
                        <img src="../image/excel.png" alt="vue_logo"></img><span className="a">A</span>
                      </div>
                    </div>
                  </li>
                  <li><div className="cont">
                          <div class="item front">
                             <img src="../image/word.png" alt="ts_logo"></img>
                          </div>
                          <div class="item back">
                            <img src="../image/word.png" alt="ts_logo"></img><span className="b">B</span>
                          </div>
                        </div></li>
                    <li><div className="cont">
                          <div class="item front">
                             <img src="../image/PS.png" alt="rn_logo"></img>
                          </div>
                          <div class="item back">
                            <img src="../image/PS.png" alt="rn_logo"></img><span className="b">B</span>
                          </div>
                        </div></li>

                </ul>
              </div>
            </div>
        </Skill>
      </SkillBox>

    </Styled.PageBack>
 </Styled.Container>
  )
}

export default Features