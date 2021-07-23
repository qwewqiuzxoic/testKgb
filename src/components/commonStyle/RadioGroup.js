import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top:10px;
`;

const Radio = styled.input`
	display: none;
    &:checked + label {
        background: url(${process.env.PUBLIC_URL + '/images/radio_on.svg'}) no-repeat center left;
    background-size: 18px 18px;
	}
`;
const RadioLabel = styled.label`
    height:18px;
	display: inline-block;
	background: url(${process.env.PUBLIC_URL + '/images/radio_off.svg'}) no-repeat center left;
    background-size: 18px;
	cursor: pointer;
    span{
        padding-left:24px;
    }
`;

function RadioGroup({id, name, label, checked ,radioChange, value, radioFalse}) {
  
  return (
    <Wrapper>
        <Radio type="radio" name={name} id={id+name} value={value} checked={checked} onChange={e=>radioChange(e)} onClick={(e)=>radioFalse(e)}/>
        <RadioLabel htmlFor={id+name}>
          <span>{label}</span>
        </RadioLabel>
    </Wrapper>
  );
}

export default RadioGroup;