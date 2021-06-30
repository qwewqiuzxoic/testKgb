import React, { useState } from 'react';
import Head from '../components/commonStyle/Head';
import ImgBoardWrap from '../components/Manage12/ImgBoardWrap';
import AddImgWrap from '../components/Manage12/AddImgWrap';
import ImgListsWrap from '../components/Manage12/ImgListsWrap';
import FloatingBtn from '../components/commonStyle/FloatingBtn';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { totalAnDataThunck, totalListThunk } from '../redux/thunkFn/total.thunk';

const Wrapper = styled.div`
    background: #FAFAFA;
`;
const ContentArea = styled.div`
    position:relative;
    ${Gutter()};
`;

function Manage12() {
    const [step,setStep] = useState(1);
    const setChangeStep = (sn) =>{
        setStep(3);
        dispatch(totalAnDataThunck("brand_photo_detail",{sn:sn}));
        
    }
    const setChange3 = ()=>{
        setStep(1);
    }
    const dispatch = useDispatch();
    const {list,loading} = useSelector(state=> state.totalListReducer); 
    useEffect(() => {
        if(step === 1){
            dispatch(totalListThunk("brand_photo_list",{}))
        } else if(step === 2){

        }else if( step === 3){

        }
        return () => {
            
        }
    }, [step])
  return (
      <Wrapper>
        <Head title="브랜드평가 사진제출" subtit="KGB의 브랜드평가입니다"/>
            
            <ContentArea>
                {/* 5_12_1_품질평가_브랜드평가_사진제출 : ImgBoardWrap 
                5_12_2_품질평가_브랜드평가_사진등록 : AddImgWrap
                5_12_3_품질평가_브랜드평가_리스트 : ImgLists */}
                {step === 1 && <ImgBoardWrap setChangeStep={setChangeStep} list={list} loading={loading}/>}
                {step === 2 && <AddImgWrap setChange3={setChange3}/>}
                {step === 3 && <ImgListsWrap setChange3={setChange3}/>}
                
                {/* <AddImgWrap/> 
                <ImgListsWrap/> */}
            </ContentArea>
            {/* 아래 버튼은 ImgBoardWrap일때만 보이게 */}
            {step === 1 && <FloatingBtn bg="#009B90" icon="ico_add" onClick={()=>setStep(2)}/>}
            

      </Wrapper>
      
  );
}

export default Manage12;