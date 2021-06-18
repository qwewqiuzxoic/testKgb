import React from 'react';
import styled from 'styled-components';
import { ChangeFont, FlexBox } from '../commonStyle';

const Wrapper = styled.div`
    padding: 15px 0 10px 0;
    border-bottom:1px solid #DFE5EA;
`;
const Question = styled.div`
    font-size:${(props) => props.theme.fontSizes.s};
    margin-bottom:16px;
`;
const Answer = styled.div`
    span{
        display: block;
  background: #F2F6F8;
  color: #ACB6BC;
  font-size:  ${(props) => props.theme.fontSizes.xs};
  padding: 14px 15px;
  margin-bottom: 8px;
  border-radius: 4px;
    }
    span:nth-child(${(props) => props.score}) {
    background: #fff;
    color: #404345;
    border:1px solid #009B90;
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