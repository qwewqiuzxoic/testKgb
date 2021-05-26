import React, { useEffect } from 'react';
import { getBoardList } from '../../redux/thunkFn/borad.thunk';
import { useDispatch, useSelector } from "react-redux";

function BoardList() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.boardReducer.BoardList);
    useEffect(() => {
        dispatch(getBoardList())
        console.log(state)
        return () => {
            
        }
    }, [state])
  return (
    <div>
      <button>
          aaaa
      </button>
    </div>
  );
}

export default BoardList;