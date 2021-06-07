import React from 'react';
import Option from './mComponent/Option';
import Question from './mComponent/Question';
import Title from './mComponent/Title';
import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';

const Wrapper = styled.div`
    background: ${(props) => props.theme.colors.white};
    border-radius: 4px;
    padding:16px 14px;
    box-shadow: px 7px 10px #33333314;
    border-radius: 4px;
    margin-bottom:12px;
`;

function QuestionBox({title, subTitle, question, option, updateData, qIndex,page,pageIndex}) {
    const upDate = updateData;
  if(page === qIndex){}
  return (
    
    <>
      {
      page === pageIndex?
      <Wrapper>
        <Title title={title} subTitle={subTitle}/>
        <Question question={question}/>
        <Option option={option} updateData={upDate} qIndex={qIndex}/>
      </Wrapper>:
      null
      }
        
    </>
  );
}

export default QuestionBox;