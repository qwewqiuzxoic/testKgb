import React from 'react';

function Menu({clickMenu}) {
  return (
    <div>
      <div>
          <span>
              로고
          </span>
          <span onClick={()=>{clickMenu()}}>
              XXX
          </span>
      </div>
      <div>
          <div>
              직영/대리점관리
          </div>
          <div>
              품질관리
          </div>
          <div>
              커뮤니티
          </div>
          <div>
              품질관리
          </div>
          <div>
              커뮤니티
          </div>
      </div>
      <div>
          <div>
                KGB포장이사 담당자
          </div>
          <div>
              자재 담당자
          </div>
      </div>
    </div>
  );
}

export default Menu;