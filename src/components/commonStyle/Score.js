import React from 'react';
import H1 from '../commonStyle/H1'
import styled from 'styled-components';
import { ChangeFont } from './ChangeFont';

const Wrapper = styled.div`
    width:100%;
    margin-top:33px;
`;
const Bg = styled.div`
    width:100%;
    height:15px;
    border-radius:7.5px;
    background: #F3F7FB;
`;
const Bar = styled.div`
    position:relative;
    width: ${(props) => props.score ? `${props.score/24*100}%` : 0};
    height:15px;
    background: transparent linear-gradient(90deg, #009B90 0%, #27C281 60%, #A8D58B 100%) 0% 0% no-repeat padding-box;
    border-radius:7.5px;
`;
const Tip = styled.div`
    position:absolute;
    top: -30px;
    right:-12px;
    width:45px;
    height: 22px;
    line-height:22px;
    text-align: center;;
    background: #404345;
    border-radius: 4px;
    ${ChangeFont(true,200)};
    font-size: ${(props) => props.theme.fontSizes.xs};
    color:#fff;
    &:after{
        position:absolute;
        bottom:-8px;
        left: 50%;
        content:'';
        margin-left: -4px;
        border-width: 4px;
        border-style: solid;
        border-color: #404345 transparent transparent transparent;
    }
`;

function Score({score}) {
  return (
    <Wrapper>
        <Bg>
            <Bar score={score}>
                <Tip>{score}점</Tip>
            </Bar>
        </Bg>
    </Wrapper>
  );
}

export default Score;