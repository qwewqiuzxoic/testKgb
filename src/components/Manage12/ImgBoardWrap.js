import React, { useEffect } from 'react';
import ImgBoard from './ImgBoard';
import styled from 'styled-components';


const Wrapper = styled.div`
  margin-top:-40px;
`;

function ImgBoardWrap() {
  return (
    <Wrapper>
      {/* map함수들어가기 */}
      <ImgBoard/>
      <ImgBoard/>
    </Wrapper>
  );
}

export default ImgBoardWrap;