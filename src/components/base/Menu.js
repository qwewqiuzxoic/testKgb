import React from 'react';
import styled from 'styled-components';
import Nav from './Nav.js';
import CallBox from './CallBox.js';
import SnsLinks from './SnsLinks.js';
import { Gutter, FlexBox } from '../commonStyle';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

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
const LinkArea = styled.div`
    margin-top:45px;
    ${Gutter()};
    text-align:center;
`

function Menu({clickMenu}) {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user)
  const [text,setText] = useState('');
  useEffect(() => {
    if(user.brand ==="YES2404"){
      setText("YES2404");
    }else if( user.brand === "이사이사"){
      setText("YES2424");
    }else if( user.brand === "KGB포장이사서비스"){
      setText("KGB포장이사");
    }else if( user.brand === "용달캡"){
      setText("Ycap");
    }else if( user.brand === "협력업체"){
      setText("YES2404");
    }else if( user.brand === "본사담당자"){
      setText("");
    }
  }, [])

  return (
    <Wrapper>
      <TopBox>
        <Link to="/"  onClick={()=>{clickMenu()}}>
          <Logo>
            <img src={process.env.PUBLIC_URL + '/images/logo_w.svg'} alt="KGB" />
          </Logo>
          </Link>
          <CloseBtn onClick={()=>{clickMenu()}}>
            <img src={process.env.PUBLIC_URL + '/images/ico_close.svg'} alt="닫기" />
          </CloseBtn>
      </TopBox>
      <Nav clickMenu={clickMenu}></Nav>
      <BottomBox>
          <CallBox name ={`${text} 담당자`} num={user.brand_tel} color="#009B90"/>
          <CallBox name ="자재 담당자" num={user.goods_tel} color="#3397B9"/>
      </BottomBox>
      <SnsArea>
            <SnsLinks user={user}/>
      </SnsArea>
      <LinkArea>
        <Link to="/Privacy" onClick={()=>{clickMenu()}}>개인정보처리방침</Link>
      </LinkArea>
    </Wrapper>
  );
}

export default Menu;