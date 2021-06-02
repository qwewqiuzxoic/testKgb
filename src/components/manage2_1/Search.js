import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top:20px;
  margin-bottom:30px;
  position:relative;
`;
const Input = styled.input`
  width:100%;
  height:40px;
  padding:0 15px;
  text-align: ${(props) => props.textAlign ? props.textAlign : 'left'};
  background:${(props) => props.value ? '#F3F7FB' : '#FFFFFF'};
  border: 1px solid${(props) => props.theme.colors.grey3};
  border-radius: 20px;
  &:focus, &:active, &.active{
    border: 1px solid #3397B9;
  }
  ::placeholder {
    color: #ACB6BC;
    }
`;
const BtnSearch = styled.div`
    position:absolute;
    top:0;
    right:0;
    width:40px;
    height:40px;
    cursor:pointer;
    img{
        width:14px;
        margin:0 auto;
    }
`;

function Search({id, ph}) {
  return (
    <Wrapper>
        <Input type="text" id={id} placeholder={ph}></Input>
        <BtnSearch>
            <img src={process.env.PUBLIC_URL + '/images/ico_search.svg'} alt="search" />
        </BtnSearch>
    </Wrapper>
  );
}

export default Search;