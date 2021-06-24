import React, {useEffect, useState}  from 'react';
import H1 from '../components/commonStyle/H1'
import Button from '../components/commonStyle/Button'
import GroupTitle from '../components/commonStyle/GroupTitle'
import DaumPostcode from "react-daum-postcode";
import styled from 'styled-components';
import { Gutter } from '../components/commonStyle';
import OrderAddress from '../components/order/OrderAddress';
import OrderDate from '../components/order/OrderDate';
import Customer from '../components/order/Customer';
import OrderAddressOption from '../components/order/OrderAddressOption';
import OrderDistance from '../components/order/OrderDistance';
import OrderOptionCost from '../components/order/OrderOptionCost';
import Ordercontract1 from '../components/order/Ordercontract1';
import OrderCar from '../components/order/OrderCar';
import TotalPriceInfo from '../components/order/TotalPriceInfo';
import { useDispatch, useSelector } from 'react-redux';
import { totalDataThunk } from '../redux/thunkFn/total.thunk';


const Wrapper = styled.div`
    background: #FAFAFA;
    padding-bottom:50px;
`;
const TopBg = styled.div`
    position:relative;
    top:0;
    left:0;
    right:0;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 0 0 0 30px;
    padding-bottom: 56px;

`;
const Section = styled.div`
    ${Gutter()};
`;

function Team3_1({match}) {

  const sn = match.params.sn;
  const disaptch = useDispatch();
  const state = useSelector(state => state.totalDataReducer.data);

  useEffect(() => {
    console.log(state.MoveDistKm)
    if(typeof(state.data==="string")){
    }
    if(sn !==undefined){
      disaptch(totalDataThunk("set_contract",{order_info_sn:sn}));
    }else{
      disaptch(totalDataThunk("set_contract",{order_info_sn:""}));
    }
    return () => {
    }
  }, [])

  return (
    <>
      <Wrapper>
        <TopBg>
            <H1 title="개인오더" subtit="KGB의 방문견적서 내역입니다"></H1>
        </TopBg>
          <Section>
            <GroupTitle title="고객정보"/>
            <Customer CustName={state.CustName} CustState={state.CustState} StPhone={state.StPhone} mobile={state.mobile}/>
          </Section>
          <Section>
            <GroupTitle title="이사정보"/>
            <OrderDate DayMove={state.DayMove} DayBox={state.DayBox} />
          </Section>
          <Section>
            <GroupTitle title="정보입력"/>
            <OrderAddress 
              StAddr1={state.StAddr1}
              StAddr2={state.StAddr2}
              StAddr3={state.StAddr3}
              StAddr4={state.StAddr4}
              EdAddr1={state.EdAddr1}
              EdAddr2={state.EdAddr2}
              EdAddr3={state.EdAddr3}
              EdAddr4={state.EdAddr4}
              />
          </Section>
          <Section>
           <GroupTitle title="운송거리 (km)"/>
            <OrderDistance MoveDistKm={state.MoveDistKm}/>
          </Section>
          <Section>
           <GroupTitle title="작업정보 입력"/>
            <OrderAddressOption title="출발지" 
            EL={state.StEL}              
            Floor={state.StFloor}
            Loop={state.StLoop}
            Sadari={state.StSadari}
            Step={state.StStep}
            gondora={state.Stgondora}
            Trdist={state.StTrdist}
            />
            <br/>
            <OrderAddressOption title="도착지"
            EL={state.EdEL}              
            Floor={state.EdFloor}
            Loop={state.EdLoop}
            Sadari={state.EdSadari}
            Step={state.EdStep}
            gondora={state.Edgondora}
            Trdist={state.EdTrdist}
            />
          </Section>
          <Section>
            <GroupTitle title="옵션 비용"/>
            <OrderOptionCost/>
          </Section>
          <Section>
           <GroupTitle title="계약 정보"/>
            <Ordercontract1/>
          </Section>
          <Section>
           <GroupTitle title="차량정보"/>
            <OrderCar/>
          </Section>
          <Section>
           <GroupTitle title="총 금액정보"/>
            <TotalPriceInfo/>
          </Section>
          <Section>
            <Button bg="#3397B9" color="#ffffff" text="저장" height="44px" fontSize="12px" mgt="40px"/>
          </Section>
      </Wrapper>
    </>
  );
}

export default Team3_1;