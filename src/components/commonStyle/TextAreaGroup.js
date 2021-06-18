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
  font-weight: bold;
`;

const TextArea = styled.textarea`
  width:100%;
  height:130px;
  padding: 10px 15px;
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

const TextAreaGroup = React.memo(function TextAreaGroup({id, title, ph, value, setInputValue,setInputValue2,disabled}) {
  const handleChange = e => {
    e.target.value === '' ? e.target.classList.remove('active'):e.target.classList.add('active');
    if(setInputValue !== undefined){
      setInputValue(e.target.value);
    }else{
      setInputValue2(e)
    }  }
  
  return (
    <Wrapper>
        <Label htmlFor={id}>{ title }</Label>
        <TextArea id={id} name={id} placeholder={ph} onChange={handleChange} value={value} disabled={disabled}></TextArea>
    </Wrapper>
  );
})

export default TextAreaGroup;