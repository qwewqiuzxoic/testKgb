import React from 'react';
import styled from 'styled-components';
import { ChangeFont, FlexBox } from '../commonStyle';

const Wrapper = styled.div`
    padding: 15px 0 10px 0;
    border-bottom:1px solid #DFE5EA;
`;
const Question = styled.div`
    font-size:${(props) => props.theme.fontSizes.s};
    margin-bottom:4px;
`;
const Answer = styled.div`
    ${ChangeFont(true,200)}
    ${FlexBox()};
    font-size:${(props) => props.theme.fontSizes.s};
    color: #ACB6BC;
    span{
        display:inline-block;
        width:auto;
        height:27px;
        border-radius:13.5px;
        text-align:center;
        line-height: 27px;;
    }
    span:nth-child(${(props) => props.score}) {
        background: #3397B9;
        color:#fff;
    }
`;

function ScoreBox({q, score, answer, text}) {
  return (
    <Wrapper>
        <Question>{q}</Question>
        <Answer score={score}>
            {answer[0] === "text" ? text===""?<div>답변이 없습니다</div>:<div>{text}</div>:
                answer && answer.map(item=>
                    
                    <span>
                        {item}
                    </span>
                    )
            }
        </Answer>
    </Wrapper>
  );
}

export default ScoreBox;