import React, { useState } from 'react';
import styled from 'styled-components';
import { ChangeFont, LabelStyle, FlexBox } from './';
import Button from './Button';



const Wrapper = styled.div`
  margin-top:10px;
`;
const FlexArea = styled.label`
  ${FlexBox()};
  align-items: flex-end;
  margin-bottom: 8px;
  label{
    margin-bottom:0!important;
  }
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

function InputGroup({id, title, ph, textAlign, value, setInputValue, btn, onClick}) {
  const [inputValue, setInputValue] = useState(value);
  const handleChange = e => {
    e.target.value === '' ? e.target.classList.remove('active'):e.target.classList.add('active');
    setInputValue(e.target.value);
  }
  
  return (
    <Wrapper>
      {btn ? 
      <FlexArea>
        <Label htmlFor={id}>{ title }</Label>
        <Button bd="#82898E" color="#82898E" text={btn} w="60px" h="25px" fontSize="10px" onclick={onclick} />
      </FlexArea> : 
      <Label htmlFor={id}>{ title }</Label> }        
        <Input type="text" id={id} placeholder={ph} textAlign={textAlign} onChange={handleChange} value={value}></Input>
    </Wrapper>
  );
}

export default InputGroup;