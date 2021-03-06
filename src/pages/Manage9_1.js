import React, { useEffect, useState } from 'react';
import Head from '../components/commonStyle/Head';
import EduBox from '../components/commonStyle/EduBox';
import { FlexBox, Gutter } from '../components/commonStyle';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { totalListThunk } from '../redux/thunkFn/total.thunk';

const Wrapper = styled.div`
    background:#FAFAFA;
    padding-bottom:60px;
    min-height:100vh;
`;

const ContentArea = styled.div`
    position:relative;
    ${Gutter()};
    margin-top:-40px;
    p{
        font-size:${(props)=>props.theme.fontSizes.s};
        margin: 26px 0 17px;
        font-weight:bold;
    }
`;
const Guide = styled.div`
    position:relative;
    background:url(${process.env.PUBLIC_URL + '/images/img_edu.jpg'}) no-repeat center;
    background-size: cover;
    min-height:160px;
    border-radius: 4px;
    &:after{
        position:absolute;
        content:'';
        top:0;
        left:0;
        right:0;
        width:100%;
        height:100%;
        background: rgba(0,0,0,.8);
        border-radius: 4px;
    }
`;

const Text = styled.div`
    position:absolute;
    top:50%;
    left:0;
    right:0;
    transform: translateY(-50%);
    text-align: center;
    color:#fff;
    z-index:1;
    line-height: 1.8;
    font-size:${(props)=>props.theme.fontSizes.s};
    span{
        color:${(props)=>props.theme.colors.secondary};
    }
`;
const TextS = styled.div`
        font-size:${(props)=>props.theme.fontSizes.xs};
`;
const BlueBtn = styled.div`
    width:45px;
    height:45px;
    border-radius:15px;
    background:#3397B9;
    ${FlexBox('center')};
    align-items: center;
    img{
        width:21px;
        height:21px;
    }
`;
function Manage9_1() {
    const listRes = useSelector(state => state.totalListReducer);
    const dispatch = useDispatch();
    const [page,setPage] = useState({
        page:1,
        pageSize:5
    });
   useEffect(() => {
        dispatch(totalListThunk("realtime_list",page));
       return () => {
       }
   }, [])
  return (
      <Wrapper>
            <Head title="????????? ????????????" subtit="KGB??? ??????????????????????????????"/>
            <ContentArea>
                <Guide>   
                    <Text>????????? ??????????????? ????????????????????? ????????? ?????? ????????????<br/>???????????? ???????????? ?????????????????????.
                        
                    </Text>
                </Guide>
                <p>????????? ???????????? ??? ?????????????????? ????????? ????????? ?????????<br/>?????? ???????????? ???????????? ????????? ????????????.</p>
                {listRes.list && listRes.list.map((item,index) => 
                    <EduBox title={item.title} date={item.edu_edate} date2={item.edu_sdate}>
                        <BlueBtn>
                            <a href={item.movie} > 
                            <img src={process.env.PUBLIC_URL + '/images/ico_video.png'} alt="?????????????????????"/>
                            </a>
                        </BlueBtn>
                    </EduBox>
                )}
                
               
               
            </ContentArea>
      </Wrapper>
      
  );
}

export default Manage9_1;