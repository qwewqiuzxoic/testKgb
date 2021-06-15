import React, { useState, useEffect }from 'react';
import Head from '../components/commonStyle/Head';
import CheckGroup from '../components/commonStyle/CheckGroup';
import CheckboxList from '../components/msg/CheckboxList';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
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

function Msg() {
  const [tab,setTab]= useState(1);

  return (
    <>
      <Wrapper>
        <Head title="KGB 쪽지함" subtit="KGB 쪽지함입니다" pb="90px"/>
        <Tabs>
          <TabName className={tab === 0 ? "selected": ""} onClick={()=>setTab(0)}>보내기</TabName>
          {/* 보내기 클릭시 SendMsg열리게 */}
          <TabName className={tab === 1 ? "selected": ""} onClick={()=>setTab(1)}>받은쪽지함</TabName>
          <TabName className={tab === 2 ? "selected": ""} onClick={()=>setTab(2)}>보낸쪽지함</TabName>
        </Tabs>
        <ContentArea>
            <CheckboxList></CheckboxList>
        </ContentArea>      
      </Wrapper>
    </>
  );
}

export default Msg;