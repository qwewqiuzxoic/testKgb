import React from 'react';
import styled from 'styled-components';
import { LabelStyle, SelectStyle} from '../commonStyle';
import InputGroup from '../commonStyle/InputGroup';

const ContentArea = styled.div`
position: relative;
`

const Label = styled.label`
  ${LabelStyle()};
  margin-top:10px;
`;

const Select = styled.select`
  ${SelectStyle()};
`;

function Customer({CustName,MoveType ,StPhone, mobile, setOrderChange}) {
  return (
    <div>
      <ContentArea>
          <InputGroup id="CustName" name="CustName" setInputValue2={setOrderChange} title="고객명" value={CustName}/>
          <InputGroup id="StPhone" name="StPhone" setInputValue2={setOrderChange}title="대표전화 (SMS)" value={StPhone}/>
          <InputGroup id="mobile" title="mobile" name="mobile" setInputValue2={setOrderChange} value={mobile}/>
      </ContentArea>
      <Label htmlFor="select_m_type">이사형태</Label>
      <Select id="MoveType" name="이사형태" name="MoveType" placeholder={MoveType} value={MoveType}>
        <option value="일반">{MoveType}</option>
        <option value="형태 1">형태 1</option>
        <option value="형태 2">형태 2</option>
        <option value="형태 3">형태 3</option>
        <option value="형태 4">형태 4</option>
        <option value="형태 5">형태 5</option>
        <option value="형태 6">형태 6</option>
      </Select>
    </div>
  );
}

export default Customer;