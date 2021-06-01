import React, { useState } from 'react';
import FindAddress from './FindAddress';
import PopUpAddress from './PopUpAddress';

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
    <div>
    <div>
      <div>
        출발지 주소
      </div>
      <PopUpAddress/>
    </div>
    <div>
      <div>
        도착지 주소
      </div>
      <PopUpAddress/>
    </div>    
  </div>
  );
}

export default OrderAddress;