import React from 'react';
import styled from 'styled-components';
import { Gutter, FlexBox } from '../../commonStyle';

const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    background: ${(props) => props.theme.colors.primary};
    ${ FlexBox() };
`
const IconBox = styled.div`
    width:50px;
`
const PageName = styled.div`
    height: 50px;
    line-height:50px;
    font-size: ${(props) => props.theme.fontSizes.l};
    font-weight:bold;
    color:#fff;
    img{
        width: 50px;
        height: auto;
    }
`
const IconMenu = styled.div`
    width:50px;
    height:50px;
    ${FlexBox('center')};
    cursor:pointer;
    img{
        display:inline-block;
        vertical-align: middle;
        width:20px;
        height:auto;
    }
`

function TopLogin({clickMenu}) {
  return (
    <Wrapper>
      <IconBox/>
      <PageName>
          로그인
      </PageName>
      <IconMenu onClick={()=>{clickMenu()}}>
      </IconMenu>
    </Wrapper>
  );
}

export default TopLogin;