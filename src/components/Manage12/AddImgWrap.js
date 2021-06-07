import React, { useEffect } from 'react';
import AddImg from './AddImg';
import styled from 'styled-components';
import GroupTitle from '../commonStyle/GroupTitle';
import Button from '../commonStyle/Button';


const Wrapper = styled.div`
`;
const BtnWrap = styled.div`
`;

function AddImgWrap() {
  return (
    <Wrapper>
        <GroupTitle title="사진 첨부하기"/>
        <AddImg title="차량"/>
        <AddImg title="포장자재"/>
        <AddImg title="유니폼"/>
        <BtnWrap>
            <Button bg="#3397B9" color='#fff' text='사진 등록하기' h='40px' fs='12px' mgt='20px'/>
            </BtnWrap>
    </Wrapper>
  );
}

export default AddImgWrap;