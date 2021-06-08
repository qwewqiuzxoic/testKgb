import React, { useEffect } from 'react';
import ImgLists from './ImgLists';
import styled from 'styled-components';
import Button from '../commonStyle/Button';


const Wrapper = styled.div`
`;
const BtnWrap = styled.div`
`;

function ImgListsWrap() {
  return (
    <Wrapper>
        <ImgLists title="차량"/>
        <ImgLists title="포장자재"/>
        <ImgLists title="유니폼"/>
        <BtnWrap>
            <Button bg="#3397B9" color='#fff' text='목록' h='40px' fs='12px' mgt='20px'/>
            </BtnWrap>
    </Wrapper>
  );
}

export default ImgListsWrap;