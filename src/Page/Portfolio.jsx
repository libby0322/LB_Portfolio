import React from 'react'
import * as Styled from "../Style/Style";
import styled from "styled-components";

const PJTBox = styled.div`
  
`

const Portfolio = () => {
  return (
    <Styled.Container>
      <Styled.PageBack>
      <Styled.SlideIn>
        <Styled.Title>
        <h3>Portfolio</h3>
        </Styled.Title>
        <Styled.Line />
      </Styled.SlideIn>
      </Styled.PageBack>
   </Styled.Container>
  )
}

export default Portfolio