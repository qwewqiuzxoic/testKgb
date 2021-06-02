import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { Gutter, FlexBox } from '../../commonStyle';


const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    background: ${(props) => props.theme.colors.primary};
    ${ FlexBox() };
`
const IconBack = styled.div`
    width:50px;
    height:50px;
    ${FlexBox('center')};
    cursor:pointer;
    img{
        display:inline-block;
        vertical-align: middle;
        width:8px;
        height:auto;
    }
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

function TopCom({clickMenu}) {
    let history = useHistory();
    function handleClick() {
        history.goBack();
      }
    
  return (
    <Wrapper>
        <IconBack onClick={()=>handleClick()}>
            <img src={process.env.PUBLIC_URL + '/images/ico_back.svg'} alt="icon" />
        </IconBack>
        <PageName>
            페이지제목  
        </PageName>
        <IconMenu onClick={()=>clickMenu()}>
            <img src={process.env.PUBLIC_URL + '/images/ico_menu.svg'} alt="KGB" />
        </IconMenu>
    </Wrapper>
  );
}

export default TopCom;