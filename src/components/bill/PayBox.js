import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../commonStyle/Button';
import { Gutter, FlexBox, ChangeFont } from '../commonStyle';
import Row from './Row';

const caution = css`
  ${({ top, left, right }) => css`
    content:'';
    position:absolute;
    background: url(${process.env.PUBLIC_URL + '/images/ico_caution.png'});
    background-size: 100%;
    width:12px;
    height:12px;
    top: ${top};
    left: ${left};
    right: ${right};
  `}
`;

const Wrapper = styled.div`
    background: #f3f7fb;
    border: 1px solid #dfe5ea;
    border-radius:4px;
    margin-bottom:20px;
    ${Gutter('10px 15px')};

`;
const Title = styled.div`
    display:inline-block;
    position:relative;
    margin-bottom:8px;
    padding-right:16px;
    font-size:14px;
    font-weight:bold;
    &.caution:after{
        ${caution}
    }
`;
const InfoList = styled.ul`
    li{
        position:relative;
        font-size:10px;
        padding-left:8px;
        margin-bottom:5px;
        &:before{
            content:'';
            position:absolute;
            width:2.5px;
            height:2.5px;
            top: 6px;
            left:0;
            background:#CED5DB;
        }
    }

`;
const PayWrap = styled.div`
    ${FlexBox()};
    margin :10px 0;
`;
const Price = styled.input`
    width:100%;
    margin-right:8px;
    ${ChangeFont(true, 200)};
    font-size:18px;
    border-bottom: 1px solid #DFE5EA;
`;
const Caution = styled.div`
    margin: 25px 0 5px;
    position:relative;
    padding-left:16px;
    font-size: 11px;
    font-weight:bold;
    &:before{
        ${caution}
    }
`;


const PayBox = ({isCard,bankname,contbrand,bankaccount}) => {

    return (
        <Wrapper>
            { isCard ? 
            <>
            <Title className={isCard ? 'caution': ''} top='3px' right='0px' >신용카드 결제</Title>
            <InfoList>
                <li>청구금액은 부가세 포함한 금액입니다.</li>
                <li>일부분만 결제하실려면 금액을 직접 입력해주세요.</li>
            </InfoList>
            <PayWrap>
                <Price type="text" value='275,000원'></Price>
                <Button bg='#3397B9' color='#ffffff' text='결제' w='70px' h='35px'></Button>
            </PayWrap>
            </>
            :
            <>
            <Title>현금 결제안내</Title>
            <Row dt="결제계좌" dd={bankaccount} ddWeight='bold'></Row>
            <Row dt="은행" dd={bankname} ddWeight='bold'></Row>
            <Row dt="예금주" dd={contbrand} ddWeight='bold'></Row>
            <Caution top='3px' left='0px'>현금 결제 전 꼭 확인해주세요 !</Caution>
            <InfoList>
                <li>반드시 실명으로 입금해주시기 바랍니다.</li>
                <li>관리비고지서를 못받았을때는 담당자에게 알려주시기 바랍니다.</li>
            </InfoList>
            </>
            }
        </Wrapper>
    );
  };

export default PayBox;
