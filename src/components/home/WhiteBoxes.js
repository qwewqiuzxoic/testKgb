import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '../commonStyle';
import WhiteBox from './WhiteBox';

const Wrapper = styled.div`
    ${FlexBox("space-around")}
    flex-wrap:wrap;
    padding:30px 12px 30px 32px;
    border-radius: 80px 0px;
    background: ${(props) => props.theme.colors.white};
    margin-bottom:15px;
`

const boxes = [
    {
        title1 : "교육일정/신청",
        title2 : "schedule / application",
        icon: "icon1_1"
    },
    {
        title1 : "교육참석내역",
        title2 : "Attendance in education",
        icon: "icon1_2"
    },
    {
        title1 : "교육출결체크",
        title2 : "attendance check",
        icon: "icon1_3"
    },
    {
        title1 : "이수대상 교육",
        title2 : "Education for completion",
        icon: "icon1_4"
    },
    {
        title1 : "교육자료실",
        title2 : "Education Resource Room",
        icon: "icon1_5"
    },
    {
        title1 : "매뉴얼 학습",
        title2 : "Manual learning",
        icon: "icon1_5"
    }
]

function WhiteBoxes() {
  return (
    <Wrapper>
      {boxes.map((box, index)=> (
          <WhiteBox key={index} title1={box.title1}  title2={box.title2} icon={box.icon}>
          </WhiteBox>
        ))}
    </Wrapper>
  );
}

export default WhiteBoxes;