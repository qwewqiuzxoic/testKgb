import React, { useState } from 'react';
import FindAddress from './FindAddress';
import PopUpAddress from './PopUpAddress';
import styled from 'styled-components';
import { ChangeFont, LabelStyle } from '../commonStyle';

const Wrapper = styled.div`
  margin-top:10px;
`;
const Layout = styled.div`
  margin-top:10px;
`;
const Label = styled.label`
  ${LabelStyle()};
`;

function OrderAddress() {
  const [address1, setAddress1] = useState({open:false, data:""});
  const openAddress1 = () => {
    setAddress1({
      ...address1,
      open:true,
      data:""
    })
  }
  const closeAddress1 = (data) => {
    setAddress1({
      ...address1,
      open:false,
      data:data
    })
  }
  const [address2, setAddress2] = useState({open:false, data:""});
  const openAddress2 = () => {
    setAddress2({
      ...address2,
      open:true,
      data:""
    })
  }
  const closeAddress2 = (data) => {
    setAddress2({
      ...address2,
      open:false,
      data:data
    })
  }
  return (
    <Wrapper>
    <Layout>
      <Label htmlFor="addr_from">
        출발지 주소
      </Label>
      <PopUpAddress/>
    </Layout>
    <Layout>
      <Label htmlFor="addr_to">
        도착지 주소
      </Label>
      <PopUpAddress/>
    </Layout>    
  </Wrapper>
  );
}

export default OrderAddress;