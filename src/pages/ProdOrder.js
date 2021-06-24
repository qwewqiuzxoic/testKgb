import React from 'react';
import Head from '../components/commonStyle/Head';
import Button from '../components/commonStyle/Button'
import OrderBox from '../components/Prod/OrderBox'
import { FlexBox, Gutter, InputStyle } from '../components/commonStyle';
import styled from 'styled-components';

const Wrapper = styled.div`
    background:#fafafa;
`;
const ContentArea = styled.div`
    ${Gutter()};
`;
const DateArea = styled.div`
    ${FlexBox()};
    margin:10px 0;

`;
const Select = styled.select`
    width:86px;
    height:34px;
    font-size:11px;
    padding: 0 10px;
    margin-right:8px;
    color:#404345;
    background: #FFFFFF;
    border: 1px solid  ${(props) => props.theme.colors.grey1};
    border-radius: 4px;

    
`;
const Option = styled.option`

`;
const Input = styled.input`
    ${InputStyle('center')};
    height:34px;
    font-size:11px;
    margin-right:8px;
        
    &:focus, &:active, &.active{
        border: 1px solid #3397B9;
        color: #3397B9;
    }
    &::placeholder {
        color: #CED5DB;
        font-weight:200;
    }
`;
const order = {
        date1:'2021 .01 .01',
        date2:'2021 .01 .02',
        status:'결제완료',
        name:'상품명상품명상품명',
        option:'S / 90',
        qty:'1',
        price:'28000',
    }

function ProdOrder() {

  return (
      <Wrapper>
        <Head title="자재주문 내역" subtit="KGB의 자재주문 내역입니다"/>
        <ContentArea>
            <DateArea>
                <Select>
                    <Option>주문일</Option>
                </Select>
                <Input type="text" id="date_order" placeholder="날짜를 선택해주세요"  textAlign="left"  onFocus={(e)=> {e.currentTarget.type = "date";e.currentTarget.focus();}} max="9999-12-31"></Input>
                <Button bg="#3397B9" color="#ffffff" text="조회" w="60px" h="34px" fontSize="11px"/>
            </DateArea>
            <OrderBox order={order}/>
        </ContentArea>  
      </Wrapper>
  );
}

export default ProdOrder;