import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { workingDayFormDataInput } from '../../redux/actionFn/workingDay';
import { Gutter, ChangeFont, InputStyle, LabelStyle, SelectStyle} from '../commonStyle';
import InputGroup from '../commonStyle/InputGroup';

const Wrapper  = styled.div`
`
const Label = styled.label`
  ${LabelStyle()};
  margin-top:10px;
`;
const Input = styled.input`
  ${InputStyle('center')};
  border:1px solid  ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  &::placeholder {
    color: ${(props) => props.theme.colors.primary};
  }
`;

function MovingInfo() {

  const dispatch = useDispatch();
  const data =  useSelector(state =>state.workingDayFormReducer.data);
  const setInputValue2 = (data) =>{
    dispatch(workingDayFormDataInput(data))
  }
  useEffect(() => {
    //console.log(data)
    return () => {
      
    }
  }, [])
  return (
    <Wrapper>
        <Label htmlFor="date_moving">이사날짜</Label>
        <Input type="text" id="dayWork" name="dayWork"
        placeholder="날짜를 선택해주세요"  textAlign="center" value={data.dayWork} onFocus={(e)=> {e.currentTarget.type = "date";e.currentTarget.focus();}} onChange={(e)=>{setInputValue2(e)}} max="9999-12-31"></Input>
        <InputGroup id="startArea" title="출발지 주소" value={data.startArea} setInputValue2={setInputValue2}/>
        <InputGroup id="arriveArea" title="도착지 주소" value={data.arriveArea} setInputValue2={setInputValue2}/>
        <InputGroup id="memo" title="메모" value={data.memo} setInputValue2={setInputValue2}/>
    </Wrapper>
  );
}

export default MovingInfo;