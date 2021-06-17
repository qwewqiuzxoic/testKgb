import React from 'react';
import styled from 'styled-components';
import { Gutter, ChangeFont, FlexBox } from '../commonStyle';
import Row from '../bill/Row';
import PayBox from '../bill/PayBox';


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

    return (
        <Wrapper>
            <Head>
                <Subtit>내청구서</Subtit>
                <Title>2021년 01월 청구서</Title>
            </Head>
            <Bg>
                <TopRow>
                    <Team>서울 1팀<span>(홍길동)</span></Team>
                    <Num>YESMAN NO : 2460</Num>
                </TopRow>
                <Section>
                    <Bold>청구금액</Bold>
                    <Row dt="상표 사용료" dd="270,000원"/>
                    <Row dt="전화착실료" dd="0원"/>
                    <Row dt="교육비" dd="0원"/>
                    <Row dt="연체료" dd="0원"/>
                    <Row dt="위약금" dd="0원"/>
                    <Row dt="기타" dd="0원"/>
                </Section>
                <Section>
                    <Row dt="합계" dd="270,000원"/>
                    <Row dt="전월미수금" dd="0원"/>
                    <Row dt="청구합계" dd="270,000원"/>
                </Section>
                <Section last="last">
                    <Total>총 청구금액</Total>
                    <Row dt="입금액" dd="0원" ddWeight='bold' ddColor='#009B90'/>
                    <Row dt="잔액" dd="270,000원" ddWeight='bold' ddColor='#009B90'/>
                </Section>
            </Bg>
            {/* 신용카드결제 부분입니다 */}
            <PayBox isCard={true}/>
            {/* 신용카드결제 부분입니다 */}
            <PayBox isCard={false}/>
        </Wrapper>
    );
  };

export default Detail;
