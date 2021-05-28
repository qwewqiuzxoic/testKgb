import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    background: ${(props) => props.theme.colors.primary};
    display: flex;
`
const IconBack = styled.div`
    width:20px;
    img{
        width:6px;
    }
`
const PageName = styled.div`
`
const IconMenu = styled.div`
    width:20px;
    height:auto;
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
            커뮤니티
        </PageName>
        <IconMenu onClick={()=>clickMenu()}>
            메뉴
        </IconMenu>
    </Wrapper>
  );
}

export default TopCom;