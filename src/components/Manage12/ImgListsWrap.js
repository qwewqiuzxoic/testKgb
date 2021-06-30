import React, { useEffect } from 'react';
import ImgLists from './ImgLists';
import styled from 'styled-components';
import Button from '../commonStyle/Button';
import { useSelector } from 'react-redux';
import Loading from '../commonStyle/Loading';


const Wrapper = styled.div`
`;
const BtnWrap = styled.div`
`;

function ImgListsWrap({setChange3}) {
  const {data,loaing} = useSelector(state=>state.totalDataAnReducer)
  return (
    <Wrapper>
      {loaing && <Loading></Loading>}
        <ImgLists title="차량" img1={data.img_car01} img2={data.img_car02} img3={data.img_car03}/>
        <ImgLists title="포장자재" img1={data.img_box01} img2={data.img_box02} img3={data.img_box03}/>
        <ImgLists title="유니폼" img1={data.img_cloth01} img2={data.img_cloth02} img3={data.img_cloth03}/>
        <BtnWrap>
            <Button onclick={setChange3} bg="#3397B9" color='#fff' text='목록' h='40px' fs='12px' mgt='20px'/>
            </BtnWrap>
    </Wrapper>
  );
}

export default ImgListsWrap;