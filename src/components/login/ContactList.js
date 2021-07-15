import React from 'react';
import styled from 'styled-components';
import { FlexBox, ChangeFont } from '../commonStyle';


const Wrapper = styled.div`
  position:relative;
  background: url(${(props) => process.env.PUBLIC_URL + '/images/bg_call' +  props.nth + '.png'}) no-repeat top center;
  background-size: 100% 100%;
  padding:10px;
  height:110px;
  box-shadow: 4px 4px 40px rgba(51, 51, 51, .1);
  border-radius:4px;
`;
const Layout = styled.div`
  width:100%;
  margin-top: 44px;
  ${FlexBox()};
`;
const Logo = styled.div`
  img{
    height:18px;
    width:auto;
  }
`;
const Name = styled.div`
`;
const BtnArea = styled.div`
  position: absolute; 
  bottom:-15px;
  left:0;
  right:0;
`;
const CallBtn = styled.a`
  display: block;
  margin:0 auto;
  width:30px;
  height:30px;
  border-radius:15px;
  background : #fff;
  box-shadow: 4px 4px 10px rgba(51, 51, 51, .1);
  ${FlexBox('center')};
  align-items: center;
  img{
    width: 10px;
    height: 10px;

  }
`;

function ContactList({contact, nth}) {
  return (
    <Wrapper nth={nth}>
      <Logo>
        <img src={process.env.PUBLIC_URL + `/images/logo_call${nth}.png`}/>    
      </Logo>
      <Layout>
        <Name>{contact.team}</Name>
        <Name>{contact.name}</Name>
      </Layout>
      <BtnArea>
        <CallBtn href={`tel:${contact.call}`}>
          <img src={process.env.PUBLIC_URL + `/images/ico_call_login.png`}/>    
        </CallBtn>
      </BtnArea>
    </Wrapper>
  );
}

export default ContactList;