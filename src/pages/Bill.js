import React, { useState, useEffect }from 'react';
import Head from '../components/commonStyle/Head';
import List from '../components/bill/List';
import Detail from '../components/bill/Detail';
import { FlexBox, Gutter, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';


const Wrapper = styled.div`
    background: #FAFAFA;
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
const ContentArea = styled.div`
    position:relative;
    margin-top:30px;
    ${Gutter()};
`;


function Bill() {
  const [tab,setTab]= useState(1);

  return (
    <>
      <Wrapper>
        <Head title="청구서 관리" subtit="KGB의 청구서입니다" pb="90px"/>
        <Tabs>
          <TabName className={tab === 0 ? "selected": ""} onClick={()=>setTab(0)}>청구서</TabName>
          <TabName className={tab === 1 ? "selected": ""} onClick={()=>setTab(1)}>청구내역</TabName>
        </Tabs>
        <ContentArea>
            {/* 청구서탭일 경우 : List.js */}
            {/* <List></List> */}

            {/* 청구내역탭일 경우 : Detail.js */}
            <Detail></Detail>
        </ContentArea>      
      </Wrapper>
    </>
  );
}

export default Bill;