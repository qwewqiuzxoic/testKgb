import React from 'react';
import styled from 'styled-components';
import { ChangeFont } from '../commonStyle';

const Wrapper = styled.div`
  width: ${(props) => props.width || "100%"};
  background:  ${(props) => props.bg || "white"};
  box-shadow: 14px 14px 40px #69B7F61A;
  border-radius: ${(props) => props.radius || "12px"};
  padding: 15px 0 15px 10px;
  margin-bottom: ${(props) => props.mgb || "10px"};
  width:31%;
`
const IconArea = styled.div`
  width:37px;
  height:auto;
  margin-bottom:12px;  
`
const TextArea = styled.div`
`
const Title = styled.div`
  font-size: ${(props) => props.theme.fontSizes.s};
  letter-spacing: -0.66px;
  font-weight: bold;
  margin-bottom:4px;
`
const TitleEng = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xxs};
  opacity: .3;
  letter-spacing: -0.54px;
  ${ChangeFont(true, 400)}
`
function WhiteBox({title1, title2, icon}) {
  return (
    <Wrapper>
      <IconArea>
        <img src={process.env.PUBLIC_URL + '/images/'+icon+'.png'} alt="icon" />
      </IconArea>
      <TextArea>
        <Title>{title1}</Title>
        <TitleEng>{title2}</TitleEng>
      </TextArea>
    </Wrapper>
  );
}

export default WhiteBox;