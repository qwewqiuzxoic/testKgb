import React, { useEffect, useState } from 'react';
import BoardList from './BoardList';
import { getBoardList } from '../../redux/thunkFn/borad.thunk';
import { useDispatch, useSelector } from "react-redux";

import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';
import Loading from '../commonStyle/Loading';


const Wrapper = styled.div`
  position:relative;
`;

//우리팀 톡톡 1
    //자유게시판 2
    //공지사항 3
    //칭찬글 4
    //꾸중글 5
    let user = JSON.parse(localStorage.getItem('user'));   
    if(user===null){
      user = JSON.parse(localStorage.getItem('user'));
  }  
function BoardListWrap({boardCode, tabCheck, tab}) {
  
    const user = JSON.parse(localStorage.getItem('user'));
    const list = useSelector(state => state.boardReducer.boardList);
    const loading = useSelector(state => state.boardReducer.loading);
    // const list = !check ? state: adu?state: state.filter(data=>
    //   (data.tname === user.teamname) === teamCheck
    // );
    const [chList,setChList] = useState([]);

    useEffect(() => {
      if(tab === 1){
        setChList(list.filter(item => item.tname === user.tname))
      }else if(tab === 2){
        setChList(list.filter(item => item.tname !== user.tname))
      } else{
        setChList(list)

      }

      return () => {
        
      }
    }, [tab,list])
  return (
    <Wrapper >
      {chList.map((post, index)=> (
          <BoardList key={index}
          index={index}
          boardCode={boardCode}    //어떤 게시판인지 판단
          board_sn={post.board_sn}
          cnt={post.cnt}
          countview={post.countview}
          loginname={post.loginname}
          regdate={post.regdate}
          title={post.title}
          tname={post.tname}
          />
      ))}
      {loading ? <Loading/>:null}

    </Wrapper>
  );

}

export default BoardListWrap;