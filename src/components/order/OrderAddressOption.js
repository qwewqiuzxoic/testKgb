import React from 'react';

function OrderAddressOption() {
  return (
    <div>
      <div>
        작업정보 입력
      </div>
      <div>
        <div>
          출발지 주소
        </div>
        <div>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </div>


      <div>
        <div>
         작업정보 옵션
        </div>
        <div>
          <input type="checkbox" name="menu1" id="menu1" />
          <input type="checkbox" name="menu2" id="menu2" />
          <input type="checkbox" name="menu3" id="menu3" />
          <input type="checkbox" name="menu4" id="menu4" />
        </div>
      </div>
    </div>
  );
}

export default OrderAddressOption;