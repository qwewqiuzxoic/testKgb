import React, { useState } from 'react';
import styled from 'styled-components';
import { ChangeFont,InputStyle, LabelStyle } from '../commonStyle';
import Button from './Button';

const Wrapper = styled.div`
  position:relative;
  border-bottom: ${(props) => props.last ? '0 none' : '1px solid #DFE5EA'};
`;

const Label = styled.label`
    position:absolute;
    top:50%;
    left:12px;
    z-index:1;
    transform: translateY(-50%);
    color: #ACB6BC;
`;
const Input = styled.input`
  ${InputStyle('right')};
  border:none;
  &:focus, &:active, &.active{
    border: 1px solid #3397B9;
    color: #3397B9;
    font-size: ${(props) => props.theme.fontSizes.s};
  }

`;



function InputNum({id, label, last}) {
  return (
    <Wrapper last={last}>
        <Label htmlFor={id}>{label}</Label>
        <Input type="number" id={id} placeholder="0"></Input>
    </Wrapper>
  );
}

export default InputNum;