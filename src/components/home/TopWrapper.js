import React from 'react';
import LineTitArea from './LineTitArea'

import styled from 'styled-components';
import { FlexBox, ChangeFont } from '../commonStyle';


const Wrapper = styled.div`
    position:absolute;
    top:0;
    width:100%;
    padding:0 12px;
`;
const Slogan = styled.div`
  margin-top: 16px;
  margin-bottom:36px;
  text-align: center;
  font-family: 'SCDream';
  color: ${(props) => props.theme.colors.white};
  font-size:13px;
  font-weight: 300;
`;
const MainBox = styled.div`
  width: ${(props) => props.width || "100%"};
  background:  ${(props) => props.bg || "white"};
  box-shadow: ${(props) => props.shadow || "14px 14px 40px rgba(51, 51, 51, .1)"};
  border-radius: ${(props) => props.radius || "12px"};
  padding: ${(props) => props.padding || "14px 20px"};
  margin-bottom: ${(props) => props.mgb || "10px"};
`;

const UserArea = styled.div`
  font-family: 'SCDream';
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.xl};
  text-align: center;
  padding:18px 0 24px;
  p{
    padding-bottom:2px;
  }
`;
const TrackingArea = styled.div`
  position:relative;
  width:100%;
  img{
    width:16px;
    height: auto;
    position:absolute;
    left:50%;
    margin-left:-8px;
  }
`;
const TrackBg = styled.div`
  position:absolute;
  top:6px;
  content:'';
  background: rgba(223, 229, 234, .2);
  width:100%;
  height:1px;
  &:before{
    position:absolute;
    top:-2.5px;
    left:0;
    content:'';
    background: ${(props) => props.theme.colors.white};
    width:5px;
    height:5px;
    border-radius:2.5px;
    opacity: .7;
  }
  &:after{
    position:absolute;
    top:-2.5px;
    right:0;
    content:'';
    background: ${(props) => props.theme.colors.white};
    width:5px;
    height:5px;
    border-radius:2.5px;
    opacity: .7;
  }
`;
const TrackAddr = styled.div`
  padding-top: 16px;
  color:${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.xs};
  display:flex;
  justify-content: space-between;
`;
const BoxArea = styled.div`
  ${FlexBox()};
`
const Desc = styled.div`
  padding-top:8px;
`
const Name = styled.div`
  ${ChangeFont(false, 600)};
  font-size: 13px;
`
const Phone = styled.div`
  ${ChangeFont(true, 200)};
  font-size: ${(props) => props.theme.fontSizes.l};
  color: #82898E;
`
const RouteArea = styled(BoxArea)`
  align-items: center;
  margin-top:30px;
`
const ArrowBox = styled.div`
  width:24px;
  img{
    height:auto;
    vertical-align: middle;
  }
`
const GreyText = styled.div`
  font-size: ${(props) => props.theme.fontSizes.s};
  color:${(props) => props.theme.colors.grey2};
`
const NullBox = styled.div`
  ${ChangeFont(false, 700)};
  color:${(props) => props.theme.colors.grey3};

`

function TopWrapper() {
  return (
    <Wrapper>
      <Slogan>오늘 고객에게 최선을 다합니다</Slogan>
      <MainBox width="100%" bg="rgba(255, 255, 255, .2)">
        <LineTitArea name="오늘일정" rightText="2021.01.01" lineColor="#3397B9" bgColor="rgba(255, 255, 255, .4)" color="#ffffff"></LineTitArea>
          {/* <TitArea>
              <TitName>오늘일정</TitName>
              <Date>2021.01.01</Date>
          </TitArea> */}
          <UserArea>
              <p>홍길동</p>
              <p>010-1234-5678</p>
          </UserArea>
          <TrackingArea>
              <TrackBg>
              </TrackBg>
              <img src={process.env.PUBLIC_URL + '/images/car.png'} alt="현재위치"/>
              <TrackAddr>
                  <p>수원시 권선구 세류동</p>
                  <p>고양시 일산동구 백석동</p>
              </TrackAddr>
          </TrackingArea>
      </MainBox>
      <BoxArea>
        {/* 맵함수.... */}
        <MainBox width="48%" padding="16px 20px">
          <LineTitArea name="내일일정"  lineColor="linear-gradient(90deg, rgba(0, 155, 144, 1) 0%, rgba(39, 194, 129, 1) 100%)" bgColor="#DFE5EA" color="#009B90" weight="bold"></LineTitArea>
          <Desc>
            <Name>홍길동</Name>
            <Phone>010-1234-5678</Phone>
            <RouteArea>
              <GreyText>세류동</GreyText>
              <ArrowBox>
                <img src={process.env.PUBLIC_URL + '/images/arrowRoute.png'} alt="이동" />
              </ArrowBox>
              <GreyText>백석동</GreyText>
            </RouteArea>
          </Desc>
        </MainBox>
        <MainBox width="48%" padding="16px 20px">
          <LineTitArea name="모레일정" lineColor="linear-gradient(90deg, #009B90 0%, #2F8DB7 100%)" bgColor="#F3F7FB" color="#2F8EB6" weight="bold"></LineTitArea>
          <Desc>
            <NullBox>일정없음</NullBox>
          </Desc>
        </MainBox>
      </BoxArea>
    </Wrapper>
  );
}

export default TopWrapper;