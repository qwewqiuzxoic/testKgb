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
          <InputGroup id="CustName" name="CustName" setInputValue2={setOrderChange} title="고객명(필수)" value={CustName}/>
          <InputGroup id="StPhone" name="StPhone" setInputValue2={setOrderChange}title="대표전화 (SMS) (필수)" value={StPhone}/>
          <InputGroup id="mobile" title="mobile" name="mobile" setInputValue2={setOrderChange} value={mobile}/>
      </ContentArea>
      <Label htmlFor="select_m_type">이사형태</Label>
      <Select id="MoveType" name="이사형태" name="MoveType" placeholder={MoveType} value={MoveType} onChange={(e)=>{setOrderChange(e)}}>
        <option value="일반">{MoveType}</option>
        <option value="가정이사">가정이사</option>
        <option value="사무실이사">사무실이사</option>
        <option value="보관이사">보관이사</option>
        <option value="해외이사">해외이사</option>
        <option value="원룸이사">원룸이사</option>
      </Select>
    </div>
  );
}

export default Customer;