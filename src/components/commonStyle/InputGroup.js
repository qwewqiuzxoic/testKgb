import React, { useState } from 'react';
import styled from 'styled-components';
import { ChangeFont } from './';


const Wrapper = styled.div`
  margin-top:10px;
`;

const Label = styled.label`
  display:inline-block;
  font-size: ${(props) => props.theme.fontSizes.s};
  color:  ${(props) => props.theme.colors.grey2};
  margin-bottom:5px;
`;

const Input = styled.input`
  width:100%;
  height:40px;
  padding:0 15px;
  text-align: ${(props) => props.textAlign ? props.textAlign : 'left'};
  background: #FFFFFF;
  border: 1px solid  ${(props) => props.theme.colors.grey1};
  border-radius: 4px;
  ${ChangeFont(true, 200)};
  &:focus, &:active, &.active{
    background: #F3F7FB;
    border:none;
  } 
  
`;

function InputGroup({id, title, ph, textAlign}) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    e.target.value === '' ? e.target.classList.remove('active'):e.target.classList.add('active');
    setInputValue(e.target.value);
  }
  
  return (
    <Wrapper>
        <Label htmlFor={id}>{ title }</Label>
        <Input type="text" id={id} pleceholder={ph} textAlign={textAlign} onChange={handleChange}></Input>
    </Wrapper>
  );
}

export default InputGroup;