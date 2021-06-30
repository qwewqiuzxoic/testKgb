import React, { useEffect, useState } from 'react';
import FindAddress from './FindAddress';
import styled from 'styled-components';
import { FlexBox, InputStyle } from '../commonStyle';


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

function PopUpAddress({Addr1,Addr2,Addr3,Addr4,type, setAddressChange}) {
const [address, setPAddress] = useState({open:false, data:""});
  const openAddress = () => {
    setPAddress({
      ...address,
      open:true,
      data:""
    })
  }
  const closeAddress = (data) => {
    setPAddress({
      ...address,
      open:false,
      data:data
    })
    setAddressChange(data,type)
  }

  useEffect(() => {
    setPAddress({
      ...address,
      data:Addr1+" "+Addr2+" "+Addr3
    })
   
    return () => {
    }
  }, [Addr1])
  return (
    <Wrapper>
      <Layout>
        <Input type="text" value={address.data} placeholder="기본주소"  readonly/>
        <Button type='button'  onClick={openAddress}>주소찾기</Button>
      </Layout>
      <div id='popupDom'>
          {address.open && (
            <FindAddress onClose={closeAddress} />
          )}
      </div>
      <Input type="text" placeholder="상세주소를 입력해주세요" value={Addr4}/>    
    </Wrapper>
  );
}

export default PopUpAddress;