import React, {useState}  from 'react';
import H1 from '../components/commonStyle/H1'
import Button from '../components/commonStyle/Button'
import GroupTitle from '../components/commonStyle/GroupTitle'
import InputGroup from '../components/commonStyle/InputGroup'
import DaumPostcode from "react-daum-postcode";
import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import OrderAddress from '../components/order/OrderAddress';
import OrderDate from '../components/order/OrderDate';
import Customer from '../components/order/Customer';
import OrderAddressOption from '../components/order/OrderAddressOption';
import OrderDistance from '../components/order/OrderDistance';
import OrderOptionCost from '../components/order/OrderOptionCost';
import Ordercontract1 from '../components/order/Ordercontract1';
import OrderCar from '../components/order/OrderCar';


const Wrapper = styled.div`
    height: 100vh;
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
const ContentArea = styled.div`
    position: relative;
    ${Gutter()};
`

const Box = styled.div`
`

const selectOptions = ['이사형태1', '이사형태2']


function Team3_1() {


  return (
    <>
      <Wrapper>
        <TopBg>
            <H1 title="개인오더" subtit="KGB의 방문견적서 내역입니다"></H1>
        </TopBg>
          <div>
            고객 정보
            <Customer />
          </div>
          <div>
            이사정보
            <OrderDate/>
          </div>
          <div>
            정보입력
            <OrderAddress/>
          </div>
          <div>
            운송거리 (km)
            <OrderDistance/>
          </div>
          <div>
            작업정보 입력 
            <OrderAddressOption/>
          </div>
          <div>
            옵션 비용
            <OrderOptionCost/>
          </div>
          <div>
            계약 정보
            <Ordercontract1/>
          </div>
          <div>
            차량정보
            <OrderCar/>
          </div>
      </Wrapper>
    </>
  );
}

export default Team3_1;