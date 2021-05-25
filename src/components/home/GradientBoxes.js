import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '../commonStyle';

const Wrapper = styled.div`
    ${FlexBox("space-around")}
    margin: 104px auto 40px;
    padding:0 12px;
`

const GradientBox = styled.div`
  width: ${(props) => props.width};
  background:  ${(props) => props.bg};
  box-shadow: 4px 14px 40px rgba(51, 51, 51, .1);
  border-radius: ${(props) => props.radius || "12px"};
  padding: ${(props) => props.padding};
  img{
      width:37px;
      height:auto;
      margin-bottom:19px;  
  }
  p{
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes.m};
    font-weight: bold;
    margin-bottom:1px;
  }
`

const boxes = [
    {
        title1 : "작업일정",
        title2 : "(월별)",
        bg: "linear-gradient(315deg, #54AD83 0%, #67CB68 100%) 0% 0% no-repeat"
    },
    {
        title1 : "견적/오더",
        title2 : "입력",
        bg: "linear-gradient(315deg, #3B8DBA 0%, #27C281 100%) 0% 0% no-repeat"
    },
    {
        title1 : "지원요청/",
        title2 : "대기",
        bg: "linear-gradient(315deg, #2F8DB7 0%, #009B90 100%) 0% 0% no-repeat"
    }
]

function GradientBoxes() {
  return (
    <Wrapper>
      {boxes.map((box, index)=> (
          <GradientBox key={index} title1={box.title1}  title2={box.title2} bg={box.bg} width="30%" padding="10px 10px 16px 10px" >
              <img src={process.env.PUBLIC_URL + '/images/ico_main_grad'+index+'.svg'} alt="icon" />
              <p>{box.title1}</p>
              <p>{box.title2}</p>
          </GradientBox>
        ))}
    </Wrapper>
  );
}

export default GradientBoxes;