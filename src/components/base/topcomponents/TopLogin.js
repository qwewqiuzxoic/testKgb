import React from 'react';

function TopLogin({clickMenu}) {
  return (
    <div>
      <div>
          login
      </div>
      <div onClick={()=>{clickMenu()}}>
          메뉴
      </div>
    </div>
  );
}

export default TopLogin;