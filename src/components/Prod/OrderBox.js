import React from 'react';
import { FlexBox, ChangeFont, InputStyle } from '../commonStyle';
import styled from 'styled-components';

const Wrapper = styled.div`
    background:#fff;
    box-shadow: 3px 3px 4px #33333314;
`;

const Top = styled.div`
    ${FlexBox()};
    align-items:center;
    padding:10px 15px;
    border-bottom:1px solid #DDDDDD;
`;
const Date = styled.div`
    font-size:${(props) => props.theme.fontSizes.s};
    span{
        color:#82898E;
    }
`;
const Status = styled.div`
    color:${(props) => props.color};
    font-size:${(props) => props.theme.fontSizes.xs};
    font-weight:bold;
`;
const Product = styled.div`
    padding: 10px 15px 0;
   
`;
const Btn = styled.div`
    text-align:right;
    padding:4px;
    img{
        display: inline-block;
        width:9px;
        height: auto;
        cursor:pointer;
    }
`;
const Name = styled.div`
    margin-top: -10px;
`;
const OptionWrap = styled.div`
    ${FlexBox()};
    margin: 4px 0;

`;
const Option = styled.div`
    font-size:${(props) => props.theme.fontSizes.xs};
    color:#82898E;
    ${ChangeFont(true, 200)};
`;
const Price = styled.div`
    text-align: right;
    ${ChangeFont(true, 400)};
    border-bottom:1px solid rgba(221,221,221,.3);
    padding-bottom:15px;
    font-size:${(props) => props.isTotal ? "12px" : "11px"};

    span{
        color: #82898E;
    }
`;
const Total = styled.div`
    padding: 15px 15px 0;
    >div{
        border-bottom:0;
    }

`;
function OrderBox({order}) {

  return (
    <Wrapper>
        <Top>
            <Date>
                <div><span>주문일: </span>{order.order_date}</div>
                <div><span>주문번호: </span>{order.goo_idx}</div>
            </Date>
            <Status color="#2F8DB7">{order.order_proc}</Status>
        </Top>
        {order && order.optlist.map((item, index)=>
            <Product>
                <Btn>
                    <img src={process.env.PUBLIC_URL + '/images/ico_x.png'} alt='삭제'/>
                </Btn>
                <Name>{order.goods_name}</Name>
                <OptionWrap>
                    <Option><span>옵션:</span> {item.goods_option}</Option>
                    <Option><span>수량:</span> {item.ea}개</Option>
                </OptionWrap>
                <Price><span>판매금액 </span>{item.price}원</Price>
                <Price><span>총 판매금액 </span>{item.tot_price}원</Price>
            </Product>
        )}
        
        <Total>
            <Price isTotal={true}><span>총금액 </span>{order.total_price}원</Price>
        </Total>
    </Wrapper>
  );
}

export default OrderBox;