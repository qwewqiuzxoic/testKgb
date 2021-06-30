import React, { useEffect } from 'react';
import ImgBoard from './ImgBoard';
import styled from 'styled-components';
import Loading from '../commonStyle/Loading';


const Wrapper = styled.div`
  margin-top:-40px;
`;

function ImgBoardWrap({setChangeStep, list, loading}) {

  return (
    <Wrapper>
      {/* map함수들어가기 */}
      {
        list && list.map(item=>
          <ImgBoard key={item.sn} setChangeStep={setChangeStep} title={item.title} sn={item.sn} list_img={item.img_list} regdate={item.regdate}/>
          )
      }
      {loading && <Loading></Loading>}
    </Wrapper>
  );
}

export default ImgBoardWrap;