import React, { useState } from 'react';
import Head from '../components/commonStyle/Head';
import ImgBoardWrap from '../components/Manage12/ImgBoardWrap';
import AddImgWrap from '../components/Manage12/AddImgWrap';
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
                {/* <ImgBoardWrap/> */}
                <AddImgWrap/>
            </ContentArea>
            <FloatingBtn bg="#009B90" icon="ico_add"/>
      </Wrapper>
      
  );
}

export default Manage12;