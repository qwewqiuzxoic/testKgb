import React from 'react';
import styled from 'styled-components';
import { Gutter } from '../commonStyle';
import InputNum from '../commonStyle/InputNum';
import Button from '../commonStyle/Button';


const Wrapper = styled.div`
  margin-top:10px;
  width:100%;
  background: #FFFFFF;
  border: 1px solid ${(props) => props.theme.colors.grey1};
  border-radius: 4px;
`;
const BtnArea = styled.div`
  ${Gutter()};
  padding-bottom: 10px;
`;

function OrderCar({CarTon10, CarTon25, CarTon50, CarCount, MoveCBM, MoveDetCBM, setOpen, setOrderChange}) {
  return (
    <Wrapper>
      <InputNum id="number_info1" name="CarTon10" label="1톤 (대)" readonly={true} value={CarTon10} inputChange={setOrderChange}></InputNum>
      <InputNum id="number_info2" name="CarTon15" label="2.5톤 (대)" readonly={true} value={CarTon25} inputChange={setOrderChange}></InputNum>
      <InputNum id="number_info3" name="CarTon50" label="5톤 (대)" readonly={true} value={CarTon50} inputChange={setOrderChange}></InputNum>
      <InputNum id="number_info4" name="MoveCBM" label="이사물량 (CBM))" readonly={false} value={MoveCBM} inputChange={setOrderChange}></InputNum>
      <InputNum id="number_info5" label="상세물량 (CBM)" readonly={true} value={MoveDetCBM} last={true}></InputNum>
      <BtnArea>
        <Button bg="#F2F6F8" onclick={setOpen} color="#ACB6BC" text="상세물량 수정/입력" height="30px" fontSize="11px"/>
      </BtnArea> 
    </Wrapper>
  );
}

export default OrderCar;