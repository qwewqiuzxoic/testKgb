import React from 'react';
import styled from 'styled-components';
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
  return (
    <Wrapper>
        <Label htmlFor="date_moving">이사날짜</Label>
        <Input type="text" id="date_moving" placeholder="날짜를 선택해주세요"  textAlign="center" onFocus={(e)=> {e.currentTarget.type = "date";e.currentTarget.focus();}} max="9999-12-31"></Input>
        <InputGroup id="supportName" title="출발지 주소" value=" "/>
        <InputGroup id="supportName" title="도착지 주소" value=" "/>
        <InputGroup id="supportName" title="메모" value=" "/>
    </Wrapper>
  );
}

export default MovingInfo;