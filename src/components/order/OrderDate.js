import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { orderDayThunk } from '../../redux/thunkFn/order.thunk';
import { totalAnDataThunck } from '../../redux/thunkFn/total.thunk';
import { FlexBox, InputStyle, LabelStyle } from '../commonStyle';


const Wrapper = styled.div`
  margin-top:10px;
`;
const Layout = styled.div`
  ${FlexBox()};
  flex-wrap:wrap;
  margin-bottom:10px;
  &>input, label{
    width:49%;
  }
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


function OrderDate({DayMove, DayBox, DayMoveText, DayMoveText2, DayBoxText,  setOrderChange}) {
  
  const dispatch = useDispatch();

  const setOrderChangeFn = (e) =>{
    setOrderChange(e);
    dispatch(orderDayThunk("get_moveday_info",{moveday:e.target.value}))
  }
  return (
    <Wrapper>
      <Layout>
        <Label htmlFor="date_move">이사날짜</Label>
        <Label htmlFor="CODE_MOVEDAY">이사일 정보</Label>
        <Input type="text" id="date_move" placeholder="날짜를 선택해주세요" name="DayMove" value={DayMove}  textAlign="center" onFocus={(e)=> {e.currentTarget.type = "date";e.currentTarget.focus();}} max="9999-12-31" onChange={(e)=>setOrderChangeFn(e)}  ></Input>
        <Input type="text" id="CODE_MOVEDAY" name="CODE_MOVEDAY" value={DayMoveText}  textAlign="center"  onChange={(e)=>setOrderChange(e)} readOnly ></Input>
      </Layout>
      <Layout>
        <Label htmlFor="date_packing">포장일 날짜</Label>
        <Label htmlFor="CODE_BOXDAY">포장일 정보</Label>
        <Input type="text" id="date_packing" placeholder="날짜를 선택해주세요" name="DayBox" value={DayBox}textAlign="center"  onFocus={(e)=> {e.currentTarget.type = "date";e.currentTarget.focus();}} max="9999-12-31" onChange={(e)=>setOrderChangeFn(e)}></Input>
        <Input type="text" id="CODE_BOXDAY" name="CODE_BOXDAY" value={DayMoveText2}  textAlign="center"  onChange={(e)=>setOrderChange(e)} readOnly></Input>
      </Layout>
    </Wrapper>
  );
}

export default OrderDate;