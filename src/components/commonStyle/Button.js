import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    width: ${(props) => props.width ? props.width : '100%'};
    height: 39px;
    font-size : ${(props) => props.theme.fontSizes.s};
    font-weight: bold;
    background: ${(props) => props.bg};
    color: ${(props) => props.color};
    border: ${(props) => props.bd ? `1px solid ${props.bd}`: 'none'};
    border-radius: 4px;
    cursor:pointer;
`;

function Button({bg, bd, color, text}) {
  return (
    <Wrapper bg={bg} bd={bd} color={color} text={text}>
        {text}
    </Wrapper>
  );
}

export default Button;