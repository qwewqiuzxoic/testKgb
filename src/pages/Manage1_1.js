import React, { useEffect, useState } from 'react';
import BoardListWrap from '../components/borad/BoardListWrap';
import Head from '../components/commonStyle/Head';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #FAFAFA;
`;
const ContentArea = styled.div`
    position:relative;
  ${Gutter()};
  margin-top:-20px;
  
`;
const Tabs = styled.div`
    position:absolute;
    ${Gutter()};
    ${FlexBox('')};
    margin-top:-72px;
`;
const TabName = styled.div`
    ${ChangeFont(true)};
    color : rgba(255, 255, 255, .7);
    padding: 12px 18px;
    border-radius: 20px;
    cursor:pointer;
    &.selected{
      background : rgba(255, 255, 255, .3);
      color: #FFFFFF;
      font-weight: bold;
      cursor: auto;
  }
`;

function Board({match}) {
    const code = match.params.boardTitle;
    const [tab,setTab]= useState(0);
  
  return (
      <Wrapper>
        <Head title="칭찬글" subtit="KGB의 미계약 해피콜입니다" pb="90px"/>
        <Tabs>
          <TabName className={tab === 0 ? "selected": ""} onClick={()=>setTab(0)}>우리팀</TabName>
          <TabName className={tab === 1 ? "selected": ""} onClick={()=>setTab(1)}>다른팀</TabName>
        </Tabs>
        <ContentArea>
            <BoardListWrap boardCode={code} />
        </ContentArea>
      </Wrapper>
      
  );
}

export default Board;