import React, { useState, useEffect }from 'react';
import Head from '../components/commonStyle/Head';
import CheckGroup from '../components/commonStyle/CheckGroup';
import CheckboxList from '../components/msg/CheckboxList';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';
import SendMsg from './SendMsg';
import { useDispatch, useSelector } from 'react-redux';
import { getMsgRcvList, getMsgSendList, postMsgDel } from '../redux/thunkFn/msg.thunk';
import Loading from '../components/commonStyle/Loading';
import ConfirmModal from '../components/base/ConfirmModal';
import {getMsgDelInit} from '../redux/actionFn/msg';
const Wrapper = styled.div`
    background: #FAFAFA;
`;
const Tabs = styled.div`
    position:absolute;
    ${Gutter()};
    ${FlexBox('')};
    margin-top:-72px;
`;
const TabName = styled.div`
    ${ChangeFont(true)};
    color : rgba(255, 255, 255, .7);
    padding: 12px 18px;
    border-radius: 20px;
    cursor:pointer;
    &.selected{
      background : rgba(255, 255, 255, .3);
      color: #FFFFFF;
      font-weight: bold;
      cursor: auto;
  }
`;
const ContentArea = styled.div`
    position:relative;
    margin-top:30px;
    ${Gutter()};
      
`;

function Msg() {

  const [tab,setTab]= useState(1);
  const {list,loading} = useSelector(state =>tab === 1 ? state.msgRcvListReducer:state.msgSendListReducer);
  const {result, message} = useSelector(state => state.msgDelReducer);
  const [checkedItems, setCheckedItems] = useState(new Set());//check된 Checkbox의 id값이 들어감
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [bChecked, setChecked] = useState(false)
  const changeTab = (num) =>{
    setTab(num);
    setCheckedItems(new Set());
    setChecked(false);
    allCheckedHandler(false);
    if(num === 1){
      dispatch(getMsgRcvList());
    }else if(num ===2){
      dispatch(getMsgSendList());
    }

  }

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  };

const allCheckedHandler = (isChecked) => {
    if (isChecked) {
      setCheckedItems(new Set(list.map(( {msg_sn} ) => msg_sn)));
      setIsAllChecked(true);
    } else {
      checkedItems.clear();
      setCheckedItems(setCheckedItems);
      setIsAllChecked(false);
    }
  };
  const [delList, setDelList] = useState([]);
  const addDelList = (item,check) =>{
    if(!check){
       setDelList(delList.concat(item));
    }else{
      setDelList(delList.filter(del => del !== item));
    }
  }
  const delSubmit = (data) =>{
    let lst =Array.from(data).join(',');
    dispatch(postMsgDel(lst,tab));
  }
  const confirmModal = () =>{
    dispatch(getMsgDelInit());
    if(tab === 1){
      dispatch(getMsgRcvList());
    }else if(tab ===2){
      dispatch(getMsgSendList());
    }
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMsgRcvList());
    return () => {
    }
  }, [])
  return (
    <>
      <Wrapper>
        <Head title="KGB 쪽지함" subtit="KGB 쪽지함입니다" pb="90px"/>
        <Tabs>
          <TabName className={tab === 0 ? "selected": ""} onClick={()=>changeTab(0)}>보내기</TabName>
          {/* 보내기 클릭시 SendMsg열리게 */}
          <TabName className={tab === 1 ? "selected": ""} onClick={()=>changeTab(1)}>받은쪽지함</TabName>
          <TabName className={tab === 2 ? "selected": ""} onClick={()=>changeTab(2)}>보낸쪽지함</TabName>
        </Tabs>
        <ContentArea>
          {loading && <Loading></Loading>}
          {tab === 0 ?<SendMsg changeTab={changeTab}></SendMsg>:<CheckboxList delSubmit={delSubmit} list={list} addDelList={addDelList} delList={delList}checkedItemHandler={checkedItemHandler} allCheckedHandler={allCheckedHandler}isAllChecked={isAllChecked} checkedItems={checkedItems} bChecked={bChecked} setChecked={setChecked}></CheckboxList>}
         
          
        </ContentArea>      
       
        <ConfirmModal open={result===""?false:true}
          text={result ==="failed"?"삭제에 실패하였습니다.": "삭제되었습니다."}
          onsubmit={confirmModal}
        ></ConfirmModal>  
      </Wrapper>
    </>
  );
}

export default Msg;