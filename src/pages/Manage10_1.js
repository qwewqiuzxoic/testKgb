import React, { useEffect, useState } from 'react';
import Head from '../components/commonStyle/Head';
import EduBox from '../components/commonStyle/EduBox';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/commonStyle/Loading';
import { totalListThunk } from '../redux/thunkFn/total.thunk';

const Wrapper = styled.div`
    background:#FAFAFA;
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
const BlueBtn = styled.div`
    width:45px;
    height:45px;
    border-radius:15px;
    background:#3397B9;
    ${FlexBox('center')};
    align-items: center;
    color:#ffffff;
`;
const GreyBtn = styled.div`
    width:45px;
    height:45px;
    border-radius:15px;
    background:#F3F7FB;
    ${FlexBox('center')};
    align-items: center;
    color:#ACB6BC;
    margin-left: 5px;
`;
function Manage10_1() {
    const dispatch = useDispatch();
    const {loading,list} = useSelector(state=>state.totalListReducer);
    const android = window.Android;
    const onclick = ()=> {
        android.showQRReader();
    }
    const [qrStr, setQrStr] = useState('text')
  
    useEffect(() => {
        dispatch(totalListThunk("edu_att_list",{}))
        return () => {
        }
    }, []);
    const qrToken = localStorage.getItem('qrToken') || 'not qrToken';       

    useEffect(() => {
        function checkUserData() {
            const item = localStorage.getItem('qrToken');
        
            if (item) {
                setQrStr(item);
            }
          }
        window.addEventListener('storage', checkUserData);
        return () => {
            window.removeEventListener('storage', checkUserData);
          }
    }, [qrStr]);
  return (
      <Wrapper>
            <Head title="교육출결체크 QR코드" subtit="KGB의 매뉴얼학습입니다"/>
            {
               list && list.map((item,index)=>
               <ContentArea key={index}>
                    <EduBox title="이사서비스 매뉴얼" date="2020.02.28">
                        <BlueBtn>입실</BlueBtn>
                        <GreyBtn>퇴실</GreyBtn>
                    </EduBox>
                </ContentArea>
               )
            }
            <button onClick={onclick}>
                qr확인용 버튼
            </button>
            <div>qrqerqeqeqe</div>
            {qrStr}
            {loading && <Loading></Loading>}
      </Wrapper>
  );
}

export default Manage10_1;