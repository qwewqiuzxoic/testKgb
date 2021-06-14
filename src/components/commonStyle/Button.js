import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    width: ${(props) => props.width ? props.width : '100%'};
    height: ${(props) => props.height ? props.height : '39px'};
    font-size : ${(props) => props.fontSize ? props.fontSize : props.theme.fontSizes.s};
    font-weight: bold;
    background: ${(props) => props.bg};
    color: ${(props) => props.color};
    border: ${(props) => props.bd ? `1px solid ${props.bd}`: 'none'};
    border-radius: 4px;
    margin-top: ${(props) => props.mgt ? props.mgt : ''};
    cursor:pointer;
`;

function Button({bg, bd, color, text, w, h, fs, mgt, onClick}) {
  return (
    <Wrapper bg={bg} bd={bd} color={color} text={text} width={w} height={h} fontSize={fs} mgt={mgt} onClick={onClick}>
        {text}
    </Wrapper>
  );
}

export default Button;