import React, { useState } from 'react';
import Head from '../components/commonStyle/Head';
import ImgBoardWrap from '../components/Manage12/ImgBoardWrap';
import AddImgWrap from '../components/Manage12/AddImgWrap';
import ImgListsWrap from '../components/Manage12/ImgListsWrap';
import FloatingBtn from '../components/commonStyle/FloatingBtn';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #FAFAFA;
`;
const ContentArea = styled.div`
    position:relative;
    ${Gutter()};
`;

function Manage12() {
  return (
      <Wrapper>
        <Head title="브랜드평가 사진제출" subtit="KGB의 브랜드평가입니다"/>
            <ContentArea>
                {/* 5_12_1_품질평가_브랜드평가_사진제출 : ImgBoardWrap 
                5_12_2_품질평가_브랜드평가_사진등록 : AddImgWrap
                5_12_3_품질평가_브랜드평가_리스트 : ImgLists */}
                {/* <ImgBoardWrap/> */}
                {/* <AddImgWrap/> */}
                <ImgListsWrap/>
            </ContentArea>
            {/* 아래 버튼은 ImgBoardWrap일때만 보이게 */}
            {/* <FloatingBtn bg="#009B90" icon="ico_add"/> */}

      </Wrapper>
      
  );
}

export default Manage12;