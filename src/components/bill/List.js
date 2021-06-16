import React from 'react';
import styled from 'styled-components';
import { Gutter } from '../commonStyle';
import Row from '../bill/Row';


const Wrapper = styled.div`
    background: url(${process.env.PUBLIC_URL + '/images/bg_bill.png'}) no-repeat center;
    background-size: 100% 100%;
    padding:12px 15px;
    margin: 0 15px 30px;
`;
const Section = styled.div`
    ${Gutter('10px 0')};
    ${(props) => props.last ? '' : 'border-bottom: 1px solid #DFE5EA'};
`;
const List = () => {

    return (
        <Wrapper>
            <Section>
                <Row dt="고지일" dd="2019.01.01" ddSize="10px" ddColor="#ACB6BC"/>
            </Section>
            <Section>
                <Row dt="전월미수금" dd="0원"/>
                <Row dt="가입분납금" dd="0원"/>
                <div>-</div>
                <Row dt="연체료" dd="0원"/>
            </Section>
            <Section last="last">
                <Row dt="고지액" dd="0원" ddWeight='bold' ddColor='#009B90' />
            </Section>
        </Wrapper>
    );
  };

export default List;
