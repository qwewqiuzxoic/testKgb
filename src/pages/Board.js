import React, { useEffect } from 'react';
import BoardList from '../components/borad/BoardList';
import BoardListWrap from '../components/borad/BoardListWrap';
import BoardTitle from '../components/borad/BoardTitle';
import FloatingBtn from '../components/commonStyle/FloatingBtn'
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';


import styled from 'styled-components';

const Wrapper = styled.div`
    background: #FAFAFA;
`;
const ContentArea = styled.div`
    position:relative;
  ${Gutter()};
  margin-top:-40px;
  
`;

function Board({match}) {
    const code = match.params.boardTitle;

  
  return (
      <Wrapper>
            <BoardTitle boardCode={code}/>
            <ContentArea>
                <BoardListWrap boardCode={code} />
            </ContentArea>
            <FloatingBtn bg="#009B90" icon="ico_add"/>
      </Wrapper>
      
  );
}

export default Board;