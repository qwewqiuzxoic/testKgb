import React, { useEffect, useState } from 'react';
import Head from '../components/commonStyle/Head';
import Button from '../components/commonStyle/Button'
import OrderBox from '../components/Prod/OrderBox'
import { FlexBox, Gutter, InputStyle } from '../components/commonStyle';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { totalListThunk } from '../redux/thunkFn/total.thunk';
import Loading from '../components/commonStyle/Loading';

const Wrapper = styled.div`
    background:#fafafa;
`;
const ContentArea = styled.div`
    ${Gutter()};
`;
const DateArea = styled.div`
    ${FlexBox()};
    margin:10px 0;

`;
const Select = styled.select`
    width:86px;
    height:34px;
    font-size:11px;
    padding: 0 10px;
    margin-right:8px;
    color:#404345;
    background: #FFFFFF;
    border: 1px solid  ${(props) => props.theme.colors.grey1};
    border-radius: 4px;
`;
const Option = styled.option`

`;
const Input = styled.input`
    ${InputStyle('center')};
    height:34px;
    font-size:11px;
    margin-right:8px;     
    &:focus, &:active, &.active{
        border: 1px solid #3397B9;
        color: #3397B9;
    }
    &::placeholder {
        color: #CED5DB;
        font-weight:200;
    }
`;

function ProdOrder() {
    const dispatch = useDispatch();
    const state = useSelector(state=>state.totalListReducer);
    const {list,loading} = state;
    const [orderDay,setOrderDay] = useState();
    const [nList,setNList] = useState([]);
    // const List = list !== undefined ?list:[]
    useEffect(() => {
        dispatch(totalListThunk("goods_order_list",{}));
        return () => {
        }
    }, [])
    const changeDay = (e) =>{
        setOrderDay(e);
    }
    const searchDay = () =>{
        setNList(list.filter(item => item.order_date === orderDay));
        console.log(orderDay);
    }
  return (
      <Wrapper>
        <Head title="자재주문 내역" subtit="KGB의 자재주문 내역입니다"/>
        <ContentArea>
            <DateArea>
                <Select>
                    <Option>주문일</Option>
                </Select>
                <Input type="text" id="date_order" placeholder="날짜를 선택해주세요"  textAlign="left"  onFocus={(e)=> {e.currentTarget.type = "date";e.currentTarget.focus();}} max="9999-12-31" onChange={(e)=>changeDay(e.target.value)}></Input>
                <Button onclick={searchDay} bg="#3397B9" color="#ffffff" text="조회" w="60px" h="34px" fontSize="11px"/>
            </DateArea>
            {
                nList !== [] && nList?.map((item, index) => 
                <div>
                    <OrderBox key={item.goo_idx} order={item}/>
                    <br/>
                </div>
                )  
            }
            {
                nList.length === 0 && !loading && list &&  list?.map((item, index) => 
                <div>
                    <OrderBox key={item.goo_idx} order={item}/>
                    <br/>
                </div>
                )   
            }
            {loading && <Loading></Loading>}
        </ContentArea>  
      </Wrapper>
  );
}

export default ProdOrder;