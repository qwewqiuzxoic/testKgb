import React, { useState } from 'react';
import styled from 'styled-components';
import { ChangeFont } from './';
import { LabelStyle } from './';


const Wrapper = styled.div`
  margin-top:10px;
`;

const Label = styled.label`
  ${LabelStyle()}
`;

const Input = styled.input`
  width:100%;
  height:40px;
  padding:0 15px;
  text-align: ${(props) => props.textAlign ? props.textAlign : 'left'};
  background:${(props) => props.value ? '#F3F7FB' : '#FFFFFF'};
  border: ${(props) => props.value ? '0 none' : `1px solid ${props.theme.colors.grey1}`};
  border-radius: 4px;
  ${ChangeFont(true, 200)};
  &:focus, &:active, &.active{
    background: #F3F7FB;
    border:none;
  }
  ::placeholder {
    color: #CED5DB;
    }
`;

function InputGroup({id, title, ph, textAlign, value, setInputValue}) {

  const handleChange = e => {
    e.target.value === '' ? e.target.classList.remove('active'):e.target.classList.add('active');
    setInputValue(e.target.value);
  }
  
  return (
    <Wrapper>
        <Label htmlFor={id}>{ title }</Label>
        <Input type="text" id={id} placeholder={ph} textAlign={textAlign} onChange={handleChange} value={value}></Input>
    </Wrapper>
  );
}

export default InputGroup;