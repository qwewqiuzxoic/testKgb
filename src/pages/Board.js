import React, { useEffect } from 'react';
import BoardList from '../components/borad/BoardList';
function Board({match}) {
    const code = match.params.boardTitle;

  
  return (
      <div>
              <BoardList  boardCode={code}/>

      </div>
      
  );
}

export default Board;