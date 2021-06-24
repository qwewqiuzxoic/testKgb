import React from 'react';
import styled from 'styled-components';
import { FlexBox, Gutter } from '../commonStyle';

const Wrapper = styled.div`
  ${Gutter()};
  ${FlexBox()};
  margin:20px auto;
`;
const LabelBox = styled.div`
    background: ${(props) => props.bg};
    border-radius: 4px;
    padding:8px 4px;
    color: ${(props) => props.color};
    span{
        position:relative;
        padding-left:7px;
        font-weight:bold;
        font-size: ${(props) => props.theme.fontSizes.xs};
    }
    span:before{
        position:absolute;
        top:50%;
        left:0;
        margin-top:-1.5px;
        content:'';
        width:3px;
        height:3px;
        border-radius:1.5px;
        background: ${(props) => props.color};
    }
`;


const labelTexts = [
    {
        bg: 'rgba(67, 201, 240, .2)',
        color: '#43C9F0',
        text: '범례일정1'
    },
    {
        bg: 'rgba(40, 241, 115, .2)',
        color: '#28F173',
        text: '범례일정2'
    },
    {
        bg: 'rgba(255, 192, 52, .2)',
        color: '#FFC034',
        text: '범례일정3'
    },
    {
        bg: 'rgba(238, 136, 62, .2)',
        color: '#EE883E',
        text: '범례일정4'
    },
    {
        bg: 'rgba(255, 77, 85, .2)',
        color: '#FF4D55',
        text: '범례일정5'
    }
]

function Labels() {
  return (
    <Wrapper>
        {labelTexts.map((label, index)=> (
          <LabelBox key={index} color={label.color} bg={label.bg} text={label.text} >
              <span>{label.text}</span>
          </LabelBox>
        ))}
    </Wrapper>
  );
}

export default Labels;