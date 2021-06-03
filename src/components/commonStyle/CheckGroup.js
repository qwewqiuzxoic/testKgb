import React, { useState } from 'react';
import styled from 'styled-components';
import { ChangeFont } from './';


const Wrapper = styled.div`
  margin-top:10px;
`;

const CheckBox = styled.input`
	display: none;
    &:checked + label {
        background: url(${process.env.PUBLIC_URL + '/images/checkbox_on.svg'}) no-repeat center left;
    background-size: 18px 18px;
	}
`;
const CheckLabel = styled.label`
    height:18px;
	display: inline-block;
	background: url(${process.env.PUBLIC_URL + '/images/checkbox_off.svg'}) no-repeat center left;
    background-size: 18px;
	cursor: pointer;
    span{
        padding-left:24px;
    }
`;

function CheckGroup({id, name, label}) {
  
  return (
    <Wrapper>
        <CheckBox type="checkbox" name={name} id={id}/>
        <CheckLabel htmlFor={id}>
          <span>{label}</span>
        </CheckLabel>
    </Wrapper>
  );
}

export default CheckGroup;