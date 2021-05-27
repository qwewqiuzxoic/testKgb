import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    position: fixed;
    bottom: 55px;
    right:12px;
    width: 40px;
    height: 40px;
    background: ${(props) => props.bg};
    border-radius: 20px;
    padding:12px 0;
    cursor:pointer;
    img{
        display: inline-block;
        width:16px;
        height:auto;
        text-align: center;
    }
`;

function FloatingBtn({bg, icon}) {
  return (
    <Wrapper bg={bg} icon={icon}>
        <img src={process.env.PUBLIC_URL + `/images/${icon}.png`}/>
    </Wrapper>
  );
}

export default FloatingBtn;