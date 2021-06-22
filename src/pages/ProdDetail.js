import React  from 'react';
import Row from '../components/bill/Row';
import Button from '../components/commonStyle/Button';
import ProdOption from '../components/Prod/ProdOption';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';

const Wrapper = styled.div`
`;
const ImgArea = styled.div`
    position:relative;
    height:415px;
    margin-top:-50px;
    z-index:-1;
`;
const DetailBox = styled.div`
    position:absolute;
    top:365px;
    left:0;
    right:0;
    ${Gutter()};
    padding-top: 15px;
    padding-bottom:50px;
    border-radius:0 40px 0 0;
    background: #fff;
`;
const Name = styled.div`
    font-size: ${(props)=>props.theme.fontSizes.xl};
    margin-bottom: 6px;
`;
const Price = styled.div`
    font-size: ${(props)=>props.theme.fontSizes.xl};
    ${ChangeFont(true, 400)};
    padding-bottom: 12px;
    margin-bottom: 12px;
    border-bottom: 1px solid #DFE5EA; 
    span{
     font-size: ${(props)=>props.theme.fontSizes.m};
     font-weight: normal;
    }
`;
const TotalArea = styled.div`
    margin-top:20px;
    padding-top:12px;
    border-top:2px solid #DFE5EA;
`;
const BtnArea = styled.div`
    ${FlexBox()};
    >button{
        width:49%;
    }
`;


const options = [
    {
        name : "긴팔티",
        option: 'S 90'
    },
    {
        name : "긴팔티",
        option: 'M 95'
    },
]

function ProdDetail() {
    return (
        <Wrapper>
            <ImgArea>
             <img src={process.env.PUBLIC_URL + '/images/dummy.jpg'} alt="자재사진"/>
            </ImgArea>
            <DetailBox>
                <Name>상품명이 노출됩니다 상품명이 노출됩니다</Name>
                <Price>35,200<span>원</span></Price>
                <Row dt="상품재고확인" dtSize="13px" dd="294" ddColor="#404345" ddWeight="bold" ddSpan='개'/>
                {options.map ((item, index)=> (
                    <ProdOption name={item.name} option={item.option}></ProdOption>
                ))}
                <TotalArea>
                    <Row dt="총 결제금액"  dd="35,200" ddColor="#009B90" ddSize=" 18px" ddWeight="bold" ddSpan='원' spanSize="11px"/>
                </TotalArea>
                <BtnArea>
                    <Button onclick={onsubmit} bg="#404345" color="#ffffff" text="장바구니"  height="44px" fontSize="12px" mgt="30px"></Button>
                    <Button onclick={onsubmit} bg="#3397B9" color="#ffffff" text="결제"  height="44px" fontSize="12px" mgt="30px"></Button>
                </BtnArea>
            </DetailBox>
        </Wrapper>
  );
}

export default ProdDetail;