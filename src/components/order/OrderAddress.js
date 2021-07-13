import React, { useState } from 'react';
import FindAddress from './FindAddress';
import PopUpAddress from './PopUpAddress';
import styled from 'styled-components';
import { LabelStyle } from '../commonStyle';

const Wrapper = styled.div`
  margin-top:10px;
`;
const Layout = styled.div`
  margin-top:10px;
`;
const Label = styled.label`
  ${LabelStyle()};
`;

function OrderAddress({StAddr1,StAddr2,StAddr3,StAddr4,EdAddr1,EdAddr2,EdAddr3, EdAddr4, setOrder,getMovePay,setAddressChange, setOrderChange}) {
  return (
    <Wrapper>
    <Layout>
      <Label htmlFor="addr_from">
        출발지 주소
      </Label>
      <PopUpAddress Addr1={StAddr1} Addr2={StAddr2} Addr3={StAddr3} Addr4={StAddr4} setAddressChange={setAddressChange} setOrderChange={setOrderChange} type="St" />
    </Layout>
    <Layout>
      <Label htmlFor="addr_to">
        도착지 주소
      </Label>
      <PopUpAddress Addr1={EdAddr1} Addr2={EdAddr2} Addr3={EdAddr3} Addr4={EdAddr4} setAddressChange={setAddressChange} setOrderChange={setOrderChange} type="Ed"/>
    </Layout>    
  </Wrapper>
  );
}

export default OrderAddress;