import React, { useEffect, useState } from 'react';
import BoardList from './BoardList';
import { getBoardList } from '../../redux/thunkFn/borad.thunk';
import { useDispatch, useSelector } from "react-redux";

import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';


const Wrapper = styled.div`

`;

function BoardListWrap({boardCode}) {
    console.log(boardCode)
    const boardCodeNm = Number(boardCode);
    const [boardName, setBoardName] = useState({
      name:"",
      title:""
    });
    const [boardName2, setBoardName2] = useState("")

    const dispatch = useDispatch();
    const state = useSelector(state => state.boardReducer.boardList);
  
    useEffect(() => {
      
      if(boardCodeNm === 1){
        setBoardName({
          name:"자유게시판",
          title:"자유게시판"
        })
      }else if(boardCodeNm === 2){
        setBoardName({
          name:"우리팀톡톡",
          title:"우리팀톡톡"
        })    
      }else if(boardCodeNm === 3){
        setBoardName({
          name:"칭찬하기",
          title:"칭찬글"
        })    
      }else if(boardCodeNm === 4){
        setBoardName({
          name:"꾸중하기",
          title:"꾸중글"
        })    
      }else if(boardCodeNm === 5){
        setBoardName({
          name:"소사장공지사항",
          title:"공지사항"
        })    
      }

        dispatch(getBoardList("YES2404",boardName.name))
        return () => {
            
        }
    }, [boardName])
  return (
    <Wrapper>
        {state.length ==0? <div>로딩중</div>:state.map((post, index)=> (
            <BoardList key={index} title={post.title} regdate={post.regdate} board_sn={post.board_sn} index={index} loginname={post.loginname} tname={post.tname} countview={post.countview} cnt={post.cnt}/>
        ))}
        
    </Wrapper>
  );
}

export default BoardListWrap;