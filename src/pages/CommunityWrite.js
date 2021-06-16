import React, { useEffect, useState } from 'react';
import Modal from '../components/base/Modal'
import InputGroup from '../components/commonStyle/InputGroup';
import TextAreaGroup from '../components/commonStyle/TextAreaGroup';
import Button from '../components/commonStyle/Button';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { modalCloase, modalOpen } from '../redux/reducer/ModalReducer';
import { submitSuggestion } from '../redux/thunkFn/suggestion.thunk';
import { suggestionInit } from '../redux/actionFn/suggestion';

const Wrapper = styled.div`
    background: #FAFAFA;
`;
const TextBox = styled.div`
    background: #F3F7FB;
    color:#ACB6BC;
    padding:12px 14px;
`;


function CommunityWrite() {
    
    const {open, data} = useSelector(state=>state.ModalReducer);
    const {result} = useSelector(state=>state.suggestionReducer);
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState({
        title:'',
        contents:''
    });
    const setTitle = (data) => {
        setInputValue({
            ...inputValue,
            title:data
        })
    }
    const setContents = (data) => {
        setInputValue({
            ...inputValue,
            contents:data
        })
    }
    
    const closeModalWrite = () => {
        dispatch(modalCloase())
    }
    
    const submitSug = () =>{
        if(data === 1){
            dispatch(submitSuggestion(inputValue,"7500","비밀건의함"));
        }else{
            dispatch(submitSuggestion(inputValue,"오더장사","비리제보"));
        }
        console.log(result)
      
        //dispatch(submitSuggestion(inputValue))
    }
    useEffect(() => {
        if(result == "success"){
            alert("성공");
            closeModalWrite();
            dispatch(suggestionInit())
        }
    }, [result])

  return (
      <Wrapper>
          {data === 1 ?
          <Modal open={ open } close={ closeModalWrite } header="건의함 글쓰기">
          <InputGroup id="write_title" title="제목" ph="제목을 입력해주세요" value={inputValue.title} setInputValue={setTitle}/>
          <TextAreaGroup id="write_text" title="내용" ph="내용을 입력해주세요" value={inputValue.contents} setInputValue={setContents}/>
          <Button  onclick={submitSug} bg="#3397B9" color="#ffffff" text="저장" height="44px" fontSize="12px" mgt="30px"></Button> 
        </Modal> :
        <Modal open={ open } close={ closeModalWrite } header="비리제보 글쓰기">
        <TextBox>비리제보 내용이 노출됩니다비리제보 내용이 노출됩니다비리제보 내용이 노출됩니다비리제보 내용이 노출됩니다비리제보 내용이 노출됩니다</TextBox>
        <InputGroup id="write_title" title="제목" ph="제목을 입력해주세요" value={inputValue.title} setInputValue={setTitle}/>
        <TextAreaGroup id="write_text" title="내용" ph="내용을 입력해주세요" value={inputValue.contents} setInputValue={setContents}/>
        <Button onclick={submitSug} bg="#3397B9" color="#ffffff" text="저장" height="44px" fontSize="12px" mgt="30px"></Button> 
        </Modal>
        
        
        }
            
            
      </Wrapper>
      
  );
}

export default CommunityWrite;