import React, { useEffect } from 'react';
import Head from '../components/commonStyle/Head';
import TopBox from '../components/edu8_9/TopBox';
import EduTable from '../components/edu8_9/EduTable';
import { Gutter } from '../components/commonStyle';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { geteduAttendList } from '../redux/thunkFn/eduAttend.thunk';


const Wrapper = styled.div`
  padding-bottom:50px;
`;
const ContentArea = styled.div`
    position:relative;
    margin-top:-45px;
    ${Gutter()};   
`;


function Edu8_9({match}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(geteduAttendList())
    
    return () => {
    }
  }, [])

  return (
    <>
      <Wrapper>
        <Head title="교육참석내역" subtit="KGB의 교육참석내역입니다" pb="90px"/>
        <ContentArea>
            <TopBox/>
            <EduTable/>              
        </ContentArea>  
      </Wrapper>
    </>
  );
}

export default Edu8_9;