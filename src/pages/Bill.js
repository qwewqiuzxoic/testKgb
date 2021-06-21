import React, { useState, useEffect }from 'react';
import Head from '../components/commonStyle/Head';
import List from '../components/bill/List';
import Detail from '../components/bill/Detail';
import { FlexBox, Gutter, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getBillDetail, getBillList } from '../redux/thunkFn/bill.thunk';
import Loading from '../components/commonStyle/Loading';


const Wrapper = styled.div`
    background: #FAFAFA;
`;
const Tabs = styled.div`
    position:absolute;
    ${Gutter()};
    ${FlexBox('')};
    margin-top:-72px;
`;
const TabName = styled.div`
    ${ChangeFont(true)};
    color : rgba(255, 255, 255, .7);
    padding: 12px 18px;
    border-radius: 20px;
    cursor:pointer;
    &.selected{
      background : rgba(255, 255, 255, .3);
      color: #FFFFFF;
      font-weight: bold;
      cursor: auto;
  }
`;
const ContentArea = styled.div`
    position:relative;
    margin-top:30px;
    ${Gutter()};
// `;
// billDetailReducer,
//     billListReducer

function Bill() {
  const [tab,setTab]= useState(0);
  const dispatch = useDispatch();
  const {loading, list} = useSelector(state => state.billListReducer);
  useEffect(() => {
    dispatch(getBillList());
    dispatch(getBillDetail());
    return () => {
      
    }
  }, [])
  return (
    <>
      <Wrapper>
        <Head title="청구서 관리" subtit="KGB의 청구서입니다" pb="90px"/>
        <Tabs>
          <TabName className={tab === 0 ? "selected": ""} onClick={()=>setTab(0)}>청구내역</TabName>
          <TabName className={tab === 1 ? "selected": ""} onClick={()=>setTab(1)}>청구서</TabName>
        </Tabs>
        <ContentArea>
            {loading && <Loading></Loading>}
            {tab === 0 ?
              list && list.map((item,index)=>
                <List key={index} daybill={item.daybill} moneyunpaid={item.moneyunpaid} 
                moneyenterence={item.moneyenterence} moneypromise={item.moneypromise} moneymonthly={item.moneymonthly}
                moneytelarrival={item.moneytelarrival} moneyteluse={item.moneyteluse} moneyadd={item.moneyadd} moneytotal={item.moneytotal}
                ></List>  
              )
              :
             <Detail></Detail>
             }
        </ContentArea>      
      </Wrapper>
    </>
  );
}

export default Bill;