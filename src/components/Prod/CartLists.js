import React, { useState }  from 'react';
import { ChangeFont, FlexBox, Gutter } from '../commonStyle';
import CheckGroup from '../commonStyle/CheckGroup';
import Checkbox from '../msg/Checkbox';
import Row from '../bill/Row';

import styled from 'styled-components';

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


function CartLists({prods}) {
    const [checkedProd, setCheckedProd] = useState(new Set());//check된 Checkbox의 id값이 들어감
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [bChecked, setChecked] = useState(false)

    const checkedItemHandler = (id, isChecked) => {
        if (isChecked) {
            checkedProd.add(id);
            setCheckedProd(checkedProd);
        } else if (!isChecked && checkedProd.has(id)) {
            checkedProd.delete(id);
            setCheckedProd(checkedProd);
        }
    };
    
    const allCheckedHandler = (isChecked) => {
        if (isChecked) {
            setCheckedProd(new Set(prods.map(({ id }) => id)));
            setIsAllChecked(true);
        } else {
            checkedProd.clear();
            setCheckedProd(setCheckedProd);
            setIsAllChecked(false);
        }
      };
    
    const checkHandler = ({ target }) => {
            setChecked(!bChecked);
            allCheckedHandler(target.checked);
    };

    return (
        <Wrapper>
            <Header>
                <CheckGroup id='checkAllCart' name='checkAllCart' label='전체선택' onChange={(e) => checkHandler(e)} checked={bChecked} nmg={true} isCircle={true}/>
                <Delete>선택삭제</Delete>
            </Header>
            {prods.map((item, index) => (
            <Box>
                <ItemBox>
                    <Checkbox isAllChecked={isAllChecked} key={`item${index}`} issue={item} checkedItemHandler={checkedItemHandler} isCircle={true}
                    />
                    <ItemInfo>
                        <Layout>
                            <Title>자재주문</Title>
                            <Btn>
                                <img src={process.env.PUBLIC_URL + '/images/ico_x.png'} alt='삭제'/>
                            </Btn>
                        </Layout>
                        <Layout>
                            <Name>{item.name}</Name>
                            <Price>{parseInt(item.price).toLocaleString()}원</Price>
                        </Layout>
                        <OptionWrap>
                            <Option><span>옵션:</span> {item.option}</Option>
                            <Option><span>수량:</span> {item.qty}개</Option>
                        </OptionWrap>
                    </ItemInfo>
                </ItemBox>
                <Total>
                    <Row dt='총 금액' dtSize="11px" dtColor="#82898E" dd={`${parseInt(item.price * item.qty).toLocaleString()}원`} ddColor="#404345" ddWeight="bold"/>
                </Total>
            </Box>
          ))}
        </Wrapper>
    );
}

export default CartLists;