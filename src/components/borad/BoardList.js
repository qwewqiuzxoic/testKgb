import React from 'react';


function BoardList({title, regdate, board_sn}) {
   
  return (
    <div>
        <div>
            {title}
        </div>
        <div>
            {regdate}
        </div>
    </div>
  );
}

export default BoardList;