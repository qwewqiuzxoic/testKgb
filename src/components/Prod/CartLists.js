import React, { useState }  from 'react';
import { ChangeFont, FlexBox, Gutter } from '../commonStyle';
import CheckGroup from '../commonStyle/CheckGroup';
import Checkbox from '../msg/Checkbox';
import Row from '../bill/Row';

import styled from 'styled-components';
import { set } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { totalMesThunk } from '../../redux/thunkFn/total.thunk';

const Wrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 4px 4px 10px #33333314;
    border-radius: 4px;

`;
const Header = styled.div`
  ${FlexBox()};
  align-items:center;
  padding: 10px;
`;
const Delete = styled.div`
    padding:4px 0;
    cursor:pointer;
`;
const Layout = styled.div`
    ${FlexBox()};
`;
const Box = styled.div`
  border-top: 1px solid #DFE5EA;
`;
const ItemBox = styled.div`
    ${Gutter('8px 10px')};
    ${FlexBox()};
    align-items: flex-start;
`;
const ItemInfo = styled.div`
    width:100%;
    margin-left:2px;
    margin-top:10px;
`;
const Title = styled.div`
    font-weight:bold;
    margin-bottom:6px;
`;
const Btn = styled.div`
    padding:4px;
    cursor:pointer;
    img{
        width:9px;
        height: auto;
    }
`;
const Name = styled.div`
    margin-bottom:4px;
`;
const Price = styled.div`
    ${ChangeFont(true, 300)}
`;
const OptionWrap = styled.div`
    padding-bottom:10px;
    ${FlexBox('flex-start')};
`;
const Option = styled.div`
    margin-right: 6px;
    font-size:${(props) => props.theme.fontSizes.xs};
    span{
        color:#82898E;
    }
`;
const Total = styled.div`
    background: #F3F7FB;
    padding:6px 12px;
`;


function CartLists({list, checkedItemHandler, allCheckedHandler, checkHandler, bChecked, isAllChecked}) {
    const dispatch = useDispatch();
    
    const basketDel = (gb_idx)=> {
        dispatch(totalMesThunk("goods_del",{gb_idx:gb_idx}));
    }
    return (
        <Wrapper>
            <Header>
                <CheckGroup id='checkAllCart' name='checkAllCart' label='전체선택' onChange={(e) => checkHandler(e)} checked={bChecked} nmg={true} isCircle={true}/>
                {/* <Delete>선택삭제</Delete> */}
            </Header>
            {list && list.map((item, index) => (
            <Box>
                <ItemBox>
                    <Checkbox isAllChecked={isAllChecked} key={`item_${index}`} issue={item} index={index} checkedItemHandler={checkedItemHandler} isCircle={true} gb_idx={item.gb_idx}
                    />
                    <ItemInfo>
                        <Layout>
                            <Title>자재주문</Title>
                            <Btn onClick={()=>basketDel(item.gb_idx)}>
                                <img src={process.env.PUBLIC_URL + '/images/ico_x.png'} alt='삭제'/>
                            </Btn>
                        </Layout>
                        <Layout>
                            <Name>{item.goods_name}</Name>
                            <Price>{parseInt(item.price).toLocaleString()}원</Price>
                        </Layout>
                        <OptionWrap>
                            <Option><span>옵션:</span> {item.option_name}</Option>
                            <Option><span>수량:</span> {item.cnt}개</Option>
                        </OptionWrap>
                    </ItemInfo>
                </ItemBox>
                <Total>
                    <Row dt='총 금액' dtSize="11px" dtColor="#82898E" dd={parseInt(item.total_price).toLocaleString()}ddColor="#404345" ddWeight="bold"/>
                </Total>
            </Box>
          ))}
        </Wrapper>
    );
}

export default CartLists;