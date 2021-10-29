import React from 'react';
import styled from 'styled-components';
import { Gutter, ChangeFont, FlexBox } from '../commonStyle';
import Row from '../bill/Row';
import PayBox from '../bill/PayBox';
import { useSelector } from 'react-redux';


const Wrapper = styled.div`
`;
const Section = styled.div`
    ${Gutter('10px 0')};
    ${(props) => props.last ? '' : 'border-bottom: 1px solid #DFE5EA'};
`;
const Head = styled.div`
    ${Gutter('12px 14px')};
    margin-bottom:30px;
    background: #F3F7FB;
    border-radius: 4px;
    box-shadow: 4px 4px 5px #33333314;
`;
const Subtit = styled.div`
    color:#ACB6BC;
    font-size:10px;
    font-weight:bold;
    margin-bottom:2px;
`;
const Title = styled.div`
    ${ChangeFont(false,500)};
`;
const Team = styled.div`
    font-size: 16px;
    ${ChangeFont(false,500)};
    span{
        font-size: 12px;
        color:#82898E;
        padding-left:4px;
    }
`;
const Num = styled.div`
    ${ChangeFont(true,200)};
    color:#ACB6BC;
    font-size: 10px;

`;
const Bg = styled.div`
    background: url(${process.env.PUBLIC_URL + '/images/bg_bill.png'}) no-repeat center;
    background-size: 100% 100%;
    padding:12px 18px 30px 15px;
    margin: 0 15px 30px;
`;
const TopRow = styled.div`
    ${FlexBox()};
    align-items:center ;
    ${Gutter('10px 0')};
    ${(props) => props.last ? '' : 'border-bottom: 1px solid #DFE5EA'};
`;
const Bold = styled.div`
    font-weight: bold;
    margin:4px 0 12px;
`;
const Total = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin:4px 0 12px;
`;
const Detail = () => {
    const data = useSelector(state => state.billDetailReducer.data);
    return (
        <Wrapper>
            <Head>
                <Subtit>내청구서</Subtit>
                <Title>{data && data.billtitle }</Title>
            </Head>
            <Bg>
                <TopRow>
                    <Team>{data && data.teamname}<span>{data && data.manname}</span></Team>
                    {/* <Num>YESMAN NO : 2460</Num> */}
                </TopRow>
                <Section>
                    <Bold>청구금액</Bold>
                    <Row dt="상표 사용료" dd={data && data.yesmanno}/>
                    <Row dt="전화착신료" dd={data && data.moneytelarrival}/>
                    <Row dt="교육비" dd={data && data.moneyedu}/>
                    <Row dt="특별교육비" dd={data && data.moneysedu}/>
                    <Row dt="연체료" dd={data && data.oneyadd}/>
                    <Row dt="위약금" dd={data && data.oneypenalty}/>
                    <Row dt="가입금" dd={data && data.oneyenterence}/>
                    <Row dt="보증금" dd={data && data.oneypromise}/>
                    <Row dt="전화권" dd={data && data.oneyteluse}/>
                </Section>
                <Section>
                    <Row dt="합계" dd={data && data.moneytotal}/>
                    <Row dt="전월미수금" dd={data && data.moneyunpaid}/>
                    <Row dt="청구합계" dd={data && data.moneyreqtotal}/>
                </Section>
                <Section last="last">
                    <Total>총 청구금액</Total>
                    <Row dt="입금액" dd={data && data.incommoney} ddWeight='bold' ddColor='#009B90'/>
                    <Row dt="잔액" dd={data && data.reserverpay} ddWeight='bold' ddColor='#009B90'/>
                </Section>
            </Bg>
            {/* 신용카드결제 부분입니다 */}
            {/* <PayBox isCard={true}/> */}
            {/* 신용카드결제 부분입니다 */}
            <PayBox isCard={false} bankname={data && data.bankname} contbrand={data && data.contbrand} bankaccount={data && data.bankaccount}/>
        </Wrapper>
    );
  };

export default Detail;
