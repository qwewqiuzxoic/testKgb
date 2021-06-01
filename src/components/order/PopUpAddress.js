import React, { useState } from 'react';
import FindAddress from './FindAddress';

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
    <div>
      <input type="text" value={address.data} readonly />
      <button type='button'  onClick={openAddress}>우편번호 검색</button>
      <div id='popupDom'>
          {address.open && (
            <FindAddress onClose={closeAddress} />
          )}
      </div>
      <input type="text" placeholder="상세주소 입력"/>    
    </div>
  );
}

export default PopUpAddress;