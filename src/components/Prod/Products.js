import React  from 'react';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';
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
const Name = styled.div`
  font-size: 13px;
  padding:4px 6px 20px;
  cursor:pointer;
`;


function Products({name, img, price}) {
  return (
      <Wrapper>
        <ImgWrap>
          <img src={ img } alt="자재" />
        </ImgWrap>
        <Name>{ name }</Name>
        <Name>{ price }</Name>
      </Wrapper>
  );
}

export default Products;