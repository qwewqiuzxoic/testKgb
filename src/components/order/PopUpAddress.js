import React, { useState } from 'react';
import FindAddress from './FindAddress';
import styled from 'styled-components';
import { FlexBox, ChangeFont, InputStyle } from '../commonStyle';


const Wrapper = styled.div`
`;
const Layout = styled.div`
  ${FlexBox()};
  margin-bottom:8px;
`;

const Button = styled.button`
  min-width: 92px;
  height:40px;
  margin-left:8px;
  line-height: 40px;
  background: #404345;
  border-radius: 4px;
  text-align: center;
  font-weight:bold;
  letter-spacing: -0.72px;
  color: #FFFFFF;
`;

const Input = styled.input`
  ${InputStyle()};
  &:focus, &:active, &.active{
    border: 1px solid #3397B9;
    color: #3397B9;
  }
`;

function PopUpAddress() {
const [address, setAddress] = useState({open:false, data:""});
  const openAddress = () => {
    setAddress({
      ...address,
      open:true,
      data:""
    })
  }
  const closeAddress = (data) => {
    setAddress({
      ...address,
      open:false,
      data:data
    })
  }
  return (
    <Wrapper>
      <Layout>
        <Input type="text" value={address.data} placeholder="기본주소"  readonly />
        <Button type='button'  onClick={openAddress}>주소찾기</Button>
      </Layout>
      <div id='popupDom'>
          {address.open && (
            <FindAddress onClose={closeAddress} />
          )}
      </div>
      <Input type="text" placeholder="상세주소를 입력해주세요"/>    
    </Wrapper>
  );
}

export default PopUpAddress;