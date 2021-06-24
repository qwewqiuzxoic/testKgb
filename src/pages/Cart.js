import React, {useState}  from 'react';
import Head from '../components/commonStyle/Head';
import CartLists from '../components/Prod/CartLists';
import Button from '../components/commonStyle/Button';
import PayBox from '../components/bill/PayBox';
import Row from '../components/bill/Row';
import { FlexBox, Gutter } from '../components/commonStyle';
import styled from 'styled-components';

const Wrapper = styled.div`
`;
const ContentArea = styled.div`
    ${Gutter()};
    margin-top:30px;
`;
const BtnArea1 = styled.div`
    ${FlexBox()};
    >button{
        width:49%;
    }
`;
const TotalPrice = styled.div`
    margin-top:30px;
    padding-bottom:15px;
`;
const Border = styled.div`
    border-top: 2px solid #DFE5EA;
    border-bottom: 1px solid #DFE5EA;
    margin-bottom: 15px;
    padding: 15px 12px;

`;
const Total = styled.div`
    padding: 0 12px;

`;
const PaySection = styled.div`
    border-top: 4px solid #DFE5EA;
    padding:25px 12px;
`;
const PayTitle = styled.div`
    font-size: 15px;
    font-weight: bold;
    padding-bottom: 10px;
    margin-bottom: 18px;
    border-bottom: 1px solid #DFE5EA;
`;
const Tabs = styled.div`
    ${FlexBox()};
    margin-bottom:30px;
`;
const TabName = styled.div`
    width:49%;
    height: 44px;
    line-height: 44px;
    border-radius:22px;
    border: 1px solid #DFE5EA;
    text-align:center;
    cursor:pointer;
    span{
        background: url(${(props) => props.isCard ? process.env.PUBLIC_URL + '/images/ico_card.png' : process.env.PUBLIC_URL + '/images/ico_cash.png'}) no-repeat center left;
        background-size: auto 14px;
        padding-left:${(props) => props.isCard ? '22px' : '18px'}
    }
    &.selected{
        border: 1px solid #009B90;
  }
`;

const prods = [
    {
        id: 'prod1',
        name : "상품이름상품이름상품이름",
        option: 'S / 90',
        qty: '1',
        price: '35100',
    },
    {
        id: 'prod2',
        name : "상품이름상품이름상품이름상품이름",
        option: 'M / 95',
        qty: '1',
        price: '35200',
    },
    {
        id: 'prod3',
        name : "상품이름상품이름상품이름",
        option: 'L / 100',
        qty: '1',
        price: '35300',
    },
]

const data = 
    {
    bankname: "기업은행",
    bankaccount: "485-003506-01-100",
    contbrand: "KGB(주)"
    }


function Cart() {
    const [tab,setTab]= useState(0);

    return (
        <Wrapper>
            <Head title="자재주문" subtit="KGB의 자재주문입니다"/>
            <ContentArea>
                <CartLists prods={prods}/>
                <BtnArea1>
                    <Button onclick={onsubmit} bg="#404345" color="#ffffff" text="선택주문"  ht="44px" fontSize="12px" mgt="48px"></Button>
                    <Button onclick={onsubmit} bg="#3397B9" color="#ffffff" text="선택삭제"  ht="44px" fontSize="12px" mgt="48px"></Button>
                </BtnArea1>
                <TotalPrice>
                    <Border>
                        <Row dt='상품금액' dd={`${parseInt(222000).toLocaleString()}원`} ddColor="#333333" ddWeight="bold"/>
                        <Row dt='배송비' dd={`${parseInt(0).toLocaleString()}원`}  ddColor="#333333" ddWeight="bold"/>
                    </Border>
                    <Total>
                        <Row dt='결제 예정금액' dtSize="15px" dd={`${parseInt(222000).toLocaleString()}원`} ddSize="14px" ddColor="#009B90" ddWeight="bold"/>
                    </Total>
                </TotalPrice>
                </ContentArea>  
                <PaySection>
                    <PayTitle>결제수단</PayTitle>
                    <Tabs>
                        <TabName isCard={true} className={tab === 0 ? "selected": ""} onClick={()=>setTab(0)}><span>카드결제</span></TabName>
                        <TabName isCard={false}  className={tab === 1 ? "selected": ""} onClick={()=>setTab(1)}><span>현금결제</span></TabName>
                    </Tabs>
                    <PayBox isCard={false} bankname={data.bankname} contbrand={data.contbrand} bankaccount={data.bankaccount}/>
                    <Button bg="#3397B9" color="#ffffff" text={`${parseInt(222000).toLocaleString()}원 주문하기`} h="44px" fs="13px" mgt="30px"></Button> 
                </PaySection>

        </Wrapper>
    );
}

export default Cart;