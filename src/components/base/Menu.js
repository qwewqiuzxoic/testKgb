import React from 'react';
import styled from 'styled-components';
import Nav from './Nav.js';
import CallBox from './CallBox.js';
import SnsLinks from './SnsLinks.js';
import { Gutter, FlexBox } from '../commonStyle';

const Wrapper = styled.div`
    top:0;
    left:0;
    background: #F3F7FB;
    width:100%;
    min-height:100vh;
    height:100%;
    z-index:999;
    padding-bottom:100px;
`
const TopBox = styled.div`
    width: 100%;
    height: 50px;
    background: ${(props) => props.theme.colors.primary};
    ${ FlexBox() };
`
const Logo = styled.div`
    width: 58px;
    height: 50px;
    ${FlexBox('center')};
    cursor:pointer;
    img{
        width: 34px;
        height: auto;
    }
`
const CloseBtn = styled.div`
    width:50px;
    height:50px;
    ${FlexBox('center')};
    cursor:pointer;
    img{
        display:inline-block;
        width:16px;
        height:auto;
        vertical-align: middle;
    }
`
const BottomBox = styled.div`
    margin-top:40px;
    ${ FlexBox() };
    ${Gutter()}
`
const SnsArea = styled.div`
    margin-top:45px;
    ${Gutter()}
`

function Menu({clickMenu}) {
  return (
    <Wrapper>
      <TopBox>
          <Logo>
            <img src={process.env.PUBLIC_URL + '/images/logo_w.svg'} alt="KGB" />
          </Logo>
          <CloseBtn onClick={()=>{clickMenu()}}>
            <img src={process.env.PUBLIC_URL + '/images/ico_close.svg'} alt="닫기" />
          </CloseBtn>
      </TopBox>
      <Nav></Nav>
      <BottomBox>
          <CallBox name ="KGB포장이사 담당자" num="010-1234-5645" color="#009B90"/>
          <CallBox name ="자재 담당자" num="010-1234-5645" color="#3397B9"/>
      </BottomBox>
      <SnsArea>
            <SnsLinks/>
      </SnsArea>
    </Wrapper>
  );
}

export default Menu;