import React, { useState } from 'react';
import Modal from '../components/base/Modal'
import InputGroup from '../components/commonStyle/InputGroup';
import TextAreaGroup from '../components/commonStyle/TextAreaGroup';
import InputFile from '../components/msg/InputFile';
import Button from '../components/commonStyle/Button';
import Search from '../components/manage2_1/Search';
import GroupTitle from '../components/commonStyle/GroupTitle';
import { ChangeFont, Gutter } from '../components/commonStyle';

import styled from 'styled-components';
import { FlexBox } from '../components/commonStyle';
import SelectLists from '../components/msg/SelectLists';
import { useDispatch, useSelector } from 'react-redux';
import { getMsgAddList, getMsgAddOfficeList, postSendMsg } from '../redux/thunkFn/msg.thunk';
import Loading from '../components/commonStyle/Loading';
import ConfirmModal from '../components/base/ConfirmModal';
import { postMsgSednInit } from '../redux/actionFn/msg';

const Wrapper = styled.div`
    background: #FAFAFA;
`;
const Tabs = styled.div`
    ${FlexBox('flex-start')};
    flex-wrap: wrap;
    margin-top:17px;
    margin-bottom:20px;
`;
const TabName = styled.div`
    ${ChangeFont(true)};
    color : #CED5DB;
    padding: 12px 18px;
    border-radius: 20px;
    cursor:pointer;
    &.selected{
      background :#009B90;
      color: #FFFFFF;
      font-weight: bold;
      cursor: auto;
  }
`;

function SendMsg({changeTab}) {
    const [ modalOpenWrite, setModalOpenWrite ] = useState(true);
    const [ modalOpenAddr, setModalOpenAddr ] = useState(false);
    const [tab,setTab]= useState(6);
    
    const changeInnerTab = (num,brand)=>{
        setTab(num)
        dispatch(getMsgAddOfficeList(brand));
    }

    const openModalWrite = () => {
        setModalOpenWrite(true);
    }
    const closeModalWrite = () => {
        setModalOpenWrite(false);
        changeTab(2);
    }
    const openModalAddr = () => {
        setModalOpenAddr(true);
        setrcvListNameText('');
        setrcvList([]);
        setrcvListName([]);
    }
    const closeModalAddr = () => {
        setModalOpenAddr(false);
      
    }
    const dispatch = useDispatch();
    const {list,loading} = useSelector(state => state.msgAddReducer);
    const {result,message} = useSelector(state => state.msgSendReducer);
    const [searText,setSearText] = useState("");
    const searchClick=()=>{
        dispatch(getMsgAddList(searText));
        //console.log(searText)
    }
    const [rcvList, setrcvList]=useState([]);
    const [rcvListName, setrcvListName]=useState([]);
    const [rcvListNameText, setrcvListNameText]=useState('');
    const [inputValue,setInputValue] = useState('');
    const [checkValue,setCheckValue]= useState(true);
    const addList = (name, tname, sn, e)=>{
        if(e.target.checked){
            setrcvList(rcvList.concat(`${name}^${tname}^${sn}`));
            setrcvListName(rcvListName.concat(e.target.value));
        } else {
            setrcvList(rcvList.filter(item => `${name}^${tname}^${sn}` !== item));
            setrcvListName(rcvListName.filter(item => e.target.value !== item));
        }
    }

    const finList = () =>{
        setrcvListNameText(rcvListName.join(','));
        closeModalAddr();
    }
    const msgSubmit = () =>{
        if(inputValue === "" || rcvList.length === 0){
            setCheckValue(false);
            return;
        }
        dispatch(postSendMsg(inputValue,rcvList.join('||')));
    }
    const modalConfirm = () =>{
        if(checkValue ===  false){
            setCheckValue(true);
        } else {
            dispatch(postMsgSednInit());
            closeModalWrite();
        }
        
    }
    return (
      <Wrapper>
            <Modal open={ modalOpenWrite } close={ closeModalWrite } header="???????????????">
                <InputGroup id="write_title" title="????????????" ph="????????? ??????????????????" btn="?????????" value={rcvListNameText} onclick={openModalAddr}/>
                <TextAreaGroup id="write_text" title="??????" ph="????????? ??????????????????" setInputValue={setInputValue} value={inputValue}/>
                <InputFile id="msgFile" title="????????????"></InputFile>
                <Button onclick={msgSubmit} bg="#3397B9" color="#ffffff" text="????????????" h="44px" fontSize="12px" mgt="30px"></Button> 
                <ConfirmModal open={result === "" ? false:true} text={message} onsubmit={modalConfirm}/>
                <ConfirmModal open={!checkValue} text="????????? ???????????????" onsubmit={modalConfirm}/>
              </Modal>
            <Modal open={ modalOpenAddr } close={ closeModalAddr } header="?????????" full='100%'>
                <Search id="searchAddr" ph="?????????,????????? ??????????????????" value={searText} onchange={setSearText} onclick={searchClick}/>
                <GroupTitle title="???????????? ??????"/>
                <Tabs>
                    <TabName className={tab === 0 ? "selected": ""} onClick={()=>changeInnerTab(0,"office")}>???????????????</TabName>
                    <TabName className={tab === 1 ? "selected": ""} onClick={()=>changeInnerTab(1,"KGB??????")}>KGB??????</TabName>
                    <TabName className={tab === 2 ? "selected": ""} onClick={()=>changeInnerTab(2,"?????????")}>YCAP</TabName>
                    <TabName className={tab === 3 ? "selected": ""} onClick={()=>changeInnerTab(3,"YES2404")}>YES2404</TabName>
                    <TabName className={tab === 4 ? "selected": ""} onClick={()=>changeInnerTab(4,"????????????")}>YES2424</TabName>
                    <TabName className={tab === 5 ? "selected": ""} onClick={()=>changeInnerTab(5,"support")}>????????????</TabName>
                </Tabs>
                {
                    loading && <Loading></Loading>
                }
               
                <SelectLists list={list} rcvList={rcvList} addList={addList}/>
                <Button onclick={finList}bg="#3397B9" color="#ffffff" text="??????" h="44px" fontSize="12px" mgt="30px"></Button> 
                
            </Modal>
      </Wrapper>
      
  );
}

export default SendMsg;