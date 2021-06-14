import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height:296px;
    overflow-y: scroll;
    border-top: 1.5px solid #404345;
`;
const CheckBox = styled.input`
	display: none;
    &:checked + label {
        background: #F3F7FB;
        color:#404345;
	}
`;
const CheckLabel = styled.label`
    width:100%;
    padding:10px 15px;
	display: inline-block;
	background: #FFFFFF;
	cursor: pointer;
`;

function SelectLists() {

  return (
      <Wrapper>
        <CheckBox type="checkbox" name="addr" id="id1"/>
        <CheckLabel htmlFor="id1">
          <span>서울북부지역 김길동 (서울2팀)</span>
        </CheckLabel>
        <CheckBox type="checkbox" name="addr" id="id2"/>
        <CheckLabel htmlFor="id2">
          <span>서울북부지역 김길동 (서울2팀)</span>
        </CheckLabel>
        <CheckBox type="checkbox" name="addr" id="id3"/>
        <CheckLabel htmlFor="id3">
          <span>서울북부지역 김길동 (서울2팀)</span>
        </CheckLabel>
      </Wrapper>
      
  );
}

export default SelectLists;