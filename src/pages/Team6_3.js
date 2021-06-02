import React, {useState}  from 'react';
import H1 from '../components/commonStyle/H1'
import Button from '../components/commonStyle/Button'
import GroupTitle from '../components/commonStyle/GroupTitle'
import DaumPostcode from "react-daum-postcode";
import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import TeamInfo from '../components/team6_3/TeamInfo';
import MovingInfo from '../components/team6_3/MovingInfo';


const Wrapper = styled.div`
    background: #FAFAFA;
    padding-bottom:30px;
`;
const TopBg = styled.div`
    position:relative;
    top:0;
    left:0;
    right:0;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 0 0 0 30px;
    padding-bottom: 56px;

`;
const Section = styled.div`
    ${Gutter()};
`;
const ContentArea = styled.div`
    position: relative;
    ${Gutter()};
`

const Box = styled.div`
`

function Team6_3() {


  return (
    <>
      <Wrapper>
        <TopBg>
            <H1 title="지원대기/요청" subtit="KGB의 지원대기/요청 내역입니다"></H1>
        </TopBg>
          <Section>
            <GroupTitle title="팀정보"/>
            <TeamInfo />
          </Section>
          <Section>
            <GroupTitle title="이사정보"/>
            <MovingInfo/>
          </Section>
          <Section>
            <Button bg="#3397B9" color="#ffffff" text="저장" height="44px" fontSize="12px" mgt="40px"/>
          </Section>
      </Wrapper>
    </>
  );
}

export default Team6_3;