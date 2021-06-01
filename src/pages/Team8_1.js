import React, { useEffect } from 'react';
import BoardList8_1 from '../components/team8_1/BoardList8_1';
import BoardListWrap8_1 from '../components/team8_1/BoardListWrap8_1';
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

function Team8_1({match}) {
    const code = match.params.boardTitle;
  
  return (
      <Wrapper>
            <BoardTitle title="상조회" subtit="KGB의 긴급연락망입니다" boardCode={code}/>
            <ContentArea>
                <BoardListWrap8_1 boardCode={code} />
            </ContentArea>
      </Wrapper>
      
  );
}

export default Team8_1;