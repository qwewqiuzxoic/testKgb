import React from 'react';
import styled from 'styled-components';
import { Gutter, ChangeFont, InputStyle, LabelStyle, SelectStyle} from '../commonStyle';
import InputGroup from '../commonStyle/InputGroup';

const Label = styled.label`
  ${LabelStyle()};
  margin-top:10px;
`;
const Select = styled.select`
  ${SelectStyle()};
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

function TeamInfo() {
  return (
    <div>
        <Label htmlFor="select_s_type">지원구분</Label>
        <Select id="select_s_type" name="option" placeholder="지원구분을 선택해주세요">
        <option value="">지원구분을 선택해주세요</option>
        <option value="지원구분 1">지원구분 1</option>
        <option value="지원구분 2">지원구분 2</option>
        <option value="지원구분 3">지원구분 3</option>
        <option value="지원구분 4">지원구분 4</option>
        <option value="지원구분 5">지원구분 5</option>
        <option value="지원구분 6">지원구분 6</option>
        </Select>
        <Label htmlFor="select_brand">브랜드</Label>
        <Select id="select_brand" name="option" placeholder="브랜드을 선택해주세요">
        <option value="">브랜드을 선택해주세요</option>
        <option value="브랜드 1">브랜드 1</option>
        <option value="브랜드 2">브랜드 2</option>
        <option value="브랜드 3">브랜드 3</option>
        <option value="브랜드 4">브랜드 4</option>
        <option value="브랜드 5">브랜드 5</option>
        <option value="브랜드 6">브랜드 6</option>
        </Select>
        <InputGroup id="supportName" title="지원자" value="홍길동"/>
        <Label htmlFor="select_car">차량</Label>
        <Select id="select_car" name="option" placeholder="차량을 선택해주세요">
        <option value="">차량을 선택해주세요</option>
        <option value="차량 1">차량 1</option>
        <option value="차량 2">차량 2</option>
        <option value="차량 3">차량 3</option>
        <option value="차량 4">차량 4</option>
        <option value="차량 5">차량 5</option>
        <option value="차량 6">차량 6</option>
        </Select>
        <InputGroup id="supportName" title="인원" value="1"/>
        <InputGroup id="supportName" title="핸드폰 번호" value="010-1212-1212"/>

    </div>
  );
}

export default TeamInfo;