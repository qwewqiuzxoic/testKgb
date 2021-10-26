import React from 'react';
import styled from 'styled-components';
import { FlexBox, Gutter } from '../commonStyle';

const Wrapper = styled.div`
  ${Gutter()};
  ${FlexBox('flex-start')};
  flex-wrap: wrap;
  margin:20px auto;
`;
const LabelBox = styled.div`
    background: ${(props) => props.bg};
    border-radius: 4px;
    padding:8px;
    margin: 4px;
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
        color: '#0026ff',
        text: '계약'
    },
    {
        bg: 'rgba(40, 241, 115, .2)',
        color: '#0dfa00',
        text: '지명오더'
    },
    {
        bg: 'rgba(255, 192, 52, .2)',
        color: '#FFC034',
        text: '견적의뢰'
    },
    {
        bg: 'rgba(238, 136, 62, .2)',
        color: '#EE883E',
        text: '미계약'
    },
    {
        bg: 'rgba(255, 77, 85, .2)',
        color: '#FF4D55',
        text: '중복견적'
    },
    {
        bg: 'rgba(255, 77, 255, .2)',
        color: '#ff4dff',
        text: '취소'
    },
    {
        bg: 'rgba(138, 43, 226, .2)',
        color: '#8a2be2',
        text: 'KGB토스'
    },
    {
        bg: 'rgba(0, 0, 255, .2)',
        color: '#0000ff',
        text: '기타'
    }
]
const labelTexts2 = [
    {
        bg: 'rgba(67, 201, 240, .2)',
        color: '#43C9F0',
        text: '맞춤'
    },
    {
        bg: 'rgba(40, 241, 115, .2)',
        color: '#28F173',
        text: '정기'
    },
    {
        bg: 'rgba(255, 192, 52, .2)',
        color: '#FFC034',
        text: '보충'
    },
    {
        bg: 'rgba(238, 136, 62, .2)',
        color: '#EE883E',
        text: '특별'
    },
    {
        bg: 'rgba(255, 77, 85, .2)',
        color: '#FF4D55',
        text: '미교육'
    }
]

function Labels({isTaskPage}) {
  return (
    <Wrapper>
        {isTaskPage ? 
        labelTexts.map((label, index)=> (
            <LabelBox key={index} color={label.color} bg={label.bg} text={label.text} >
                <span>{label.text}</span>
            </LabelBox>
         )) :
        labelTexts2.map((label, index)=> (
            <LabelBox key={index} color={label.color} bg={label.bg} text={label.text} >
                <span>{label.text}</span>
            </LabelBox>
         ))
        }
    </Wrapper>
  );
}

export default Labels;