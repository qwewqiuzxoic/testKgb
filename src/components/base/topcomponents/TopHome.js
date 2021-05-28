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
    ${FlexBox('center')};
    cursor:pointer;
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

function TopHome({clickMenu}) {
  return (
    <Wrapper>
      <IconBox/>
      <PageName>
        <img src={process.env.PUBLIC_URL + '/images/logo_w.svg'} alt="KGB" />
      </PageName>
      <IconMenu  onClick={()=>clickMenu()}>
        <img src={process.env.PUBLIC_URL + '/images/ico_menu.svg'} alt="KGB" />
      </IconMenu>
    </Wrapper>
  );
}

export default TopHome;