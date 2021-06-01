import React from 'react';
import styled from 'styled-components';
import { Gutter } from '../commonStyle';
import GroupTitle from '../commonStyle/GroupTitle';
import InputGroup from '../commonStyle/InputGroup';

function Customer() {
  const ContentArea = styled.div`
    position: relative;
    ${Gutter()};
`
  return (
    <div>
      <ContentArea>
            <GroupTitle title="고객정보"/>
            <InputGroup id="customerName" title="고객명"/>
            <InputGroup id="customerTel0" title="대표전화 (SMS)"/>
            <InputGroup id="customerTel1" title="전화번호"/>
        </ContentArea>  
          <select name="이사형태" placeholder="이사형태를 선택해주세요">
            <option value="">이사형태를 선택해주세요</option>
            <option value="형태 1">형태 1</option>
            <option value="형태 2">형태 2</option>
            <option value="형태 3">형태 3</option>
            <option value="형태 4">형태 4</option>
            <option value="형태 5">형태 5</option>
            <option value="형태 6">형태 6</option>
          </select>
    </div>
  );
}

export default Customer;