import React, { useEffect } from 'react';
import BoardList from '../components/borad/BoardList';
import BoardListWrap from '../components/borad/BoardListWrap';
import BoardTitle from '../components/borad/BoardTitle';
function Board({match}) {
    const code = match.params.boardTitle;

  
  return (
      <div>
            <BoardTitle boardCode={code}/>
            <BoardListWrap boardCode={code} />
      </div>
      
  );
}

export default Board;