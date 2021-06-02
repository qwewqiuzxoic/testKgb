import React from 'react';
import { Link } from 'react-router-dom';
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
    >div{
        align-items: ;
    }
`

const boxes = [
    {
        title1 : "교육일정/신청",
        title2 : "schedule / application",
        icon: "icon1_1",
        link: "/Team1"
    },
    {
        title1 : "교육참석내역",
        title2 : "Attendance in education",
        icon: "icon1_2",
        link: "/"
    },
    {
        title1 : "교육출결체크",
        title2 : "attendance check",
        icon: "icon1_3",
        link: "/"
    },
    {
        title1 : "이수대상 교육",
        title2 : "Education for completion",
        icon: "icon1_4",
        link: "/"
    },
    {
        title1 : "교육자료실",
        title2 : "Education Resource Room",
        icon: "icon1_5",
        link: "/"
    },
    {
        title1 : "매뉴얼 학습",
        title2 : "Manual learning",
        icon: "icon1_6",
        link: "/"
    }
]
const boxes1 = [
    {
        title1 : "칭찬글",
        title2 : "Compliment",
        icon: "icon2_1",
        link: "/"
    },
    {
        title1 : "해피콜",
        title2 : "Happy Call",
        icon: "icon2_2",
        link: "/"
    },
    {
        title1 : "현장실사결과",
        title2 : "Field Survey Results",
        icon: "icon2_3",
        link: "/"
    },
    {
        title1 : "꾸중글",
        title2 : "Scolding",
        icon: "icon2_4",
        link: "/"
    },
    {
        title1 : "미계약해피콜",
        title2 : "Uncontracted Happy Call",
        icon: "icon2_5",
        link: "/"
    },
    {
        title1 : "A/S현황",
        title2 : "A/S Status",
        icon: "icon2_6",
        link: "/"
    }
]
const boxes2 = [
    {
        title1 : "자유게시판",
        title2 : "Free Board",
        icon: "icon3_1",
        link: "/"
    },
    {
        title1 : "건의하기",
        title2 : "Make a suggestion",
        icon: "icon3_2",
        link: "/"
    },
    {
        title1 : "쪽지함",
        title2 : "Inbox",
        icon: "icon3_3",
        link: "/"
    },
    {
        title1 : "청구서관리",
        title2 : "Bill management",
        icon: "icon3_4",
        link: "/"
    },
    {
        title1 : "자료실",
        title2 : "Reference Room",
        icon: "icon3_5",
        link: "/"
    },
    {
        title1 : "자재주문",
        title2 : "Material order",
        icon: "icon3_6",
        link: "/"
    }
]

function WhiteBoxes() {
  return (
      <div>
            <Wrapper>
            {boxes.map((box, index)=> (
                <Link to={box.link} style={{display:"block",width:"31%"}}>
                    <WhiteBox key={index} title1={box.title1}  title2={box.title2} icon={box.icon}>
                    </WhiteBox>
                </Link>
                ))}
            </Wrapper>
            <Wrapper>
            {boxes1.map((box, index)=> (
                <Link to={box.link} style={{display:"block",width:"31%"}}>
                    <WhiteBox key={index} title1={box.title1}  title2={box.title2} icon={box.icon}>
                    </WhiteBox>
                </Link>
                ))}
            </Wrapper>
            <Wrapper>
            {boxes2.map((box, index)=> (
                <Link to={box.link} style={{display:"block",width:"31%"}}>
                    <WhiteBox key={index} title1={box.title1}  title2={box.title2} icon={box.icon}>
                    </WhiteBox>
                </Link>
                ))}
            </Wrapper>
      </div>
   
  );
}

export default WhiteBoxes;