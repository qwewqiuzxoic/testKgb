import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { workingDayFormDataInput } from '../../redux/actionFn/workingDay';
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
  const dispatch = useDispatch();
  const data =  useSelector(state =>state.workingDayFormReducer.data);
  const setInputValue2 = (data) =>{
    dispatch(workingDayFormDataInput(data))
  }

  return (
    <div>
        <Label htmlFor="gbn">지원구분</Label>
        <Select id="gbn" name="gbn" placeholder="지원구분을 선택해주세요" onChange={e=>setInputValue2(e)}>
        <option value="">지원구분을 선택해주세요</option>
        <option value="대기">대기</option>
        <option value="요청">요청</option>
        
        </Select>
        <Label htmlFor="brand">브랜드</Label>
        <Select id="brand" name="brand" placeholder="브랜드을 선택해주세요" onChange={e=>setInputValue2(e)}>
        <option value="">브랜드을 선택해주세요</option>
        <option value="KGB이사">KGB이사</option>
        <option value="YES2404">YES2404</option>
        <option value="이사이사">이사이사</option>
        <option value="용달캡">용달캡</option>
        </Select>
        <InputGroup id="manName" title="지원자" value={data.manName} setInputValue2={setInputValue2}/>
        <Label htmlFor="code_ton">차량</Label>
        <Select id="code_ton" name="code_ton" placeholder="차량을 선택해주세요" onChange={e=>setInputValue2(e)}>
        <option value="">차량을 선택해주세요</option>
        <option value="1톤">1톤</option>
        <option value="2.5톤">2.5톤</option>
        <option value="5톤">5톤</option>
        </Select>
        <InputGroup id="personNum" title="인원" value={data.personNum} setInputValue2={setInputValue2}/>
        <InputGroup id="phone" title="핸드폰 번호" value={data.phone} setInputValue2={setInputValue2}/>

    </div>
  );
}

export default TeamInfo;