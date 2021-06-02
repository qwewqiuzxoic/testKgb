import React from 'react';
import styled from 'styled-components';
import { Gutter, ChangeFont, InputStyle, LabelStyle, SelectStyle} from '../commonStyle';
import InputGroup from '../commonStyle/InputGroup';

const Select = styled.select`
  margin-top:10px;
  ${SelectStyle()};
`;

function OrderOptionCost() {
  return (
    <div>
    <Select name="option" placeholder="작업정보옵션을 선택해주세요">
      <option value="">작업정보옵션을 선택해주세요</option>
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

export default OrderOptionCost;