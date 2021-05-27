import React from 'react';

function TopHome({clickMenu}) {
  return (
    <div>
      <div>
          home
      </div>
      <div  onClick={()=>clickMenu()}>
          메뉴
      </div>
    </div>
  );
}

export default TopHome;