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

const TextArea = styled.textarea`
  width:100%;
  height:130px;
  padding: 10px 15px;
  background:${(props) => props.value ? '#F3F7FB' : '#FFFFFF'};
  border: ${(props) => props.value ? '0 none' : props.theme.colors.grey1};
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

function TextAreaGroup({id, title, ph, value}) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    e.target.value === '' ? e.target.classList.remove('active'):e.target.classList.add('active');
    setInputValue(e.target.value);
  }
  
  return (
    <Wrapper>
        <Label htmlFor={id}>{ title }</Label>
        <TextArea id={id} placeholder={ph} onChange={handleChange} value={value}></TextArea>
    </Wrapper>
  );
}

export default TextAreaGroup;