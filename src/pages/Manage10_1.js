import React, { useEffect, useState } from 'react';
import Head from '../components/commonStyle/Head';
import EduBox from '../components/commonStyle/EduBox';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/commonStyle/Loading';
import { totalListThunk } from '../redux/thunkFn/total.thunk';
import axios from 'axios'
import NoPost from '../components/commonStyle/NoPost';
import ConfirmModal from '../components/base/ConfirmModal';

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
    margin-right:8px;
`;
const GreyBtn = styled.div`
    width:45px;
    height:45px;
    border-radius:15px;
    background:#ff4747;
    ${FlexBox('center')};
    align-items: center;
    color:#ffffff;
    margin-left: 5px;
`;
function Manage10_1() {
    const dispatch = useDispatch();
    const getAuth = (key) => (obj) => { console.log(obj); return obj.totalListReducer[key]};
    const loading = useSelector(getAuth("loading"));
    const list = useSelector(getAuth("list"));
    const android = window.Android;

    const user = JSON.parse(localStorage.getItem('user'));
    const [qrStr, setQrStr] = useState('text');
    const [qrModalOpen, setQrModalOpen] = useState(false);
    const onsubmit = () =>{
        setQrModalOpen(false);
    }
    useEffect(() => {
        dispatch(totalListThunk("edu_att_list",{}))
        return () => {
        }
    }, []);

    const onclick = ()=> {
        const osCheck = navigator.userAgent.toLowerCase();
        if(osCheck.indexOf("android") !== -1){
            android.showQRReader();
        }else if(osCheck.indexOf("iphone") !== -1){
            window.webkit.messageHandlers.ios.postMessage("showQR");
        }
        
    }
    useEffect(() => {
        function storageEventHandler(event) {
            const todosString = localStorage.getItem("qrToken");
         
            setQrStr(todosString);
        }
        // Hook up the event handler
        window.addEventListener("itemInserted", storageEventHandler,false);
        return () => {
            // Remove the handler when the component unmounts
            window.removeEventListener("itemInserted", storageEventHandler);
        };
    }, []);
    useEffect(()=>{
        if(qrStr !== 'text'){
            const url = qrStr + '&man_info_sn=' +user.man_info_sn;
            axios.post(url,null).then(function(res){
                localStorage.setItem('qrToken', 'text');
                if(res.data.result === "success"){
                    setQrModalOpen(true);
                }
                setQrStr('text');
                dispatch(totalListThunk("edu_att_list",{}))
            }).catch(function(err){
                alert(err);
            })
        }
    },[qrStr])

  return (
      <Wrapper>
            <Head title="?????????????????? QR??????" subtit="KGB??? ????????????????????????"/>
            <ContentArea>
            {
               list && list.map((item,index)=>
              
                    <EduBox key={index} title={item.title} date={item.sdate}>
                        <BlueBtn onClick={onclick} >??????</BlueBtn>
                        <GreyBtn onClick={onclick}>??????</GreyBtn>
                    </EduBox>
                
               )
            }
            </ContentArea>
            {
                list.length === 0 && <NoPost></NoPost>
            }
              
            {/* <button onClick={onclick}>
                qr????????? ??????
            </button>
           
            {qrStr} */}
            {loading && <Loading></Loading>}

            <ConfirmModal open={qrModalOpen} text={"????????? ?????????????????????."} onsubmit={onsubmit}/>

      </Wrapper>
  );
}

export default Manage10_1;