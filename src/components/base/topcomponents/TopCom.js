import React from 'react';
import { useHistory } from 'react-router-dom';


function TopCom({clickMenu}) {
    let history = useHistory();
    function handleClick() {
        history.goBack();
      }
    
  return (
    <div >
        <div onClick={()=>handleClick()}>
            뒤로가기
        </div>
        <div>
            커뮤니티
        </div>
        <div onClick={()=>clickMenu()}>
            메뉴
        </div>
    </div>
  );
}

export default TopCom;