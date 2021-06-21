import React from 'react';
import styled from 'styled-components';
import { Gutter } from '../commonStyle';
import Row from '../bill/Row';


const Wrapper = styled.div`
    background: url(${process.env.PUBLIC_URL + '/images/bg_bill.png'}) no-repeat center;
    background-size: 100% 100%;
    padding:12px 18px 12px 15px;
    margin: 0 15px 30px;
`;
const Section = styled.div`
    ${Gutter('10px 0')};
    ${(props) => props.last ? '' : 'border-bottom: 1px solid #DFE5EA'};
`;
const List = (props) => {

    return (
        <Wrapper>
            <Section>
                <Row dt="고지일" dd={props.daybill} ddSize="10px" ddColor="#ACB6BC"/>
            </Section>
            <Section>
                {
                   props.moneyunpaid !=="0" && <Row dt="전월미수금" dd={props.moneyunpaid}/>
                }
                {
                   props.moneyenterence !=="0" && <Row dt="가입금" dd={props.moneyenterence}/>

                }
                {
                   props.moneypromise !=="0" && <Row dt="보증금" dd={props.moneypromise}/>
                }
                {
                   props.moneymonthly !=="0" && <Row dt="이번달이용료" dd={props.moneymonthly}/>
                }
                {
                   props.moneytelarrival !=="0" && <Row dt="전화착신료" dd={props.moneytelarrival}/>
                }
                {
                   props.moneyteluse !=="0" && <Row dt="전화권" dd={props.moneyteluse}/>
                }
                <div>-</div>
                {
                   props.moneyadd !=="0" && <Row dt="연체료" dd={props.moneyadd}/>
                }
                
            </Section>
            <Section last="last">
                <Row dt="합계" dd={props.moneytotal} ddWeight='bold' ddColor='#009B90' />
            </Section>
        </Wrapper>
    );
  };

export default List;
