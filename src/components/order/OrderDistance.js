import React from 'react';
import styled from 'styled-components';
import { InputStyle } from '../commonStyle';


const Wrapper = styled.div`
  ${InputStyle('right')};
  margin-top:10px;
  line-height: 40px;
  background: #F3F7FB;
  border:none;
`;
function OrderDistance({MoveDistKm}) {
  return (
      <Wrapper>
      {MoveDistKm}km
    </Wrapper>
  );
}

export default OrderDistance;