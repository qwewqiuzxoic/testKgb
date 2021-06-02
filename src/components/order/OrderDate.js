import React, { useState } from 'react';
import styled from 'styled-components';
import { ChangeFont,InputStyle, LabelStyle } from '../commonStyle';


const Wrapper = styled.div`
  margin-top:10px;
`;

const Label = styled.label`
  ${LabelStyle()};
`;

const Input = styled.input`
  ${InputStyle('center')};

  &:focus, &:active, &.active{
    border: 1px solid #3397B9;
    color: #3397B9;
  }
  &::placeholder {
    color: #CED5DB;
    font-weight:200;
  }
`;


function OrderDate() {
  

  return (
    <Wrapper>
      <Label htmlFor="date_move">이사날짜</Label>
      <Input type="text" id="date_move" placeholder="날짜를 선택해주세요"  textAlign="center" onFocus={(e)=> {e.currentTarget.type = "date";e.currentTarget.focus();}} max="9999-12-31"></Input>
      <Label htmlFor="date_packing">포장일 날짜</Label>
      <Input type="text" id="date_packing" placeholder="날짜를 선택해주세요" textAlign="center"  onFocus={(e)=> {e.currentTarget.type = "date";e.currentTarget.focus();}} max="9999-12-31"></Input>
    </Wrapper>
  );
}

export default OrderDate;