import React  from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`

`;
const ImgWrap = styled.div`
  position: relative;
  width:100%;
  &:after{
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  img{
    position:absolute;
    width:100%;
    height:100%;
    cursor:pointer;
  }
`;
const TextWrap = styled.div`
  font-size: 13px;
  padding:4px 0 0 4px;
  cursor:pointer;
`;
const Name = styled.div`
  cursor:pointer;
`;


function Products({name, img, price}) {
  return (
      <Wrapper>
        <ImgWrap>
          <img src={ img } alt="자재" />
        </ImgWrap>
        <TextWrap>
          <Name>{ name }</Name>
          <Name>{ parseInt(price).toLocaleString() }원</Name>
        </TextWrap>
      </Wrapper>
  );
}

export default Products;