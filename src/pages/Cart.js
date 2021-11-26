import React, {useEffect, useState}  from 'react';
import Head from '../components/commonStyle/Head';
import CartLists from '../components/Prod/CartLists';
import Button from '../components/commonStyle/Button';
import PayBox from '../components/bill/PayBox';
import Row from '../components/bill/Row';
import { FlexBox, Gutter } from '../components/commonStyle';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { totalListThunk, totalMesThunk } from '../redux/thunkFn/total.thunk';
import Loading from '../components/commonStyle/Loading';
import ConfirmModal from '../components/base/ConfirmModal';
import { totalMesInit } from '../redux/actionFn/total';

const Wrapper = styled.div`
`;
const ContentArea = styled.div`
    ${Gutter()};
    margin-top:30px;
`;
const BtnArea1 = styled.div`
    ${FlexBox()};
`;
const TotalPrice = styled.div`
    margin-top:30px;
    padding-bottom:15px;
`;
const Border = styled.div`
    border-top: 2px solid #DFE5EA;
    border-bottom: 1px solid #DFE5EA;
    margin-bottom: 15px;
    padding: 15px 12px;

`;
const Total = styled.div`
    padding: 0 12px;

`;
const PaySection = styled.div`
    border-top: 4px solid #DFE5EA;
    padding:25px 12px;
`;
const PayTitle = styled.div`
    font-size: 15px;
    font-weight: bold;
    padding-bottom: 10px;
    margin-bottom: 18px;
    border-bottom: 1px solid #DFE5EA;
`;
const Tabs = styled.div`
    ${FlexBox()};
    margin-bottom:30px;
`;
const TabName = styled.div`
    width:99%;
    height: 44px;
    line-height: 44px;
    border-radius:22px;
    border: 1px solid #DFE5EA;
    text-align:center;
    cursor:pointer;
    span{
        background: url(${(props) => props.isCard ? process.env.PUBLIC_URL + '/images/ico_card.png' : process.env.PUBLIC_URL + '/images/ico_cash.png'}) no-repeat center left;
        background-size: auto 14px;
        padding-left:${(props) => props.isCard ? '22px' : '18px'}
    }
    &.selected{
        border: 1px solid #009B90;
  }
`;



const data = 
    {
    bankname: "기업은행",
    bankaccount: "485-003506-01-100",
    contbrand: "KGB(주)"
    }


function Cart() {
    const [tab,setTab]= useState(0);
    const dispatch = useDispatch();
    const state = useSelector(state=>state.totalListReducer);
    const {loading:mesLoading, message, result} = useSelector(state=>state.totalMesReducer);
    const {list,loading} = state;
    useEffect(() => {
        dispatch(totalListThunk("basket_list",{}));
        return () => {
        }
    }, [])

    const [checkedProd, setCheckedProd] = useState(new Set());//check된 Checkbox의 id값이 들어감
    const [isAllChecked, setIsAllChecked] = useState(true);
    const [bChecked, setChecked] = useState(true);
    const [ttPrice, setTtPirce] = useState(0);
  
    const checkedItemHandler = (gb_idx, isChecked) => {
        var price = list.filter(item=>{
            return item.gb_idx === gb_idx;
        })[0].total_price;
        if (isChecked) {
            checkedProd.add(gb_idx);
            setCheckedProd(checkedProd);
            setTtPirce(ttPrice+parseInt(price));
        } else if (!isChecked && checkedProd.has(gb_idx)) {
            checkedProd.delete(gb_idx);
            setCheckedProd(checkedProd);
            setTtPirce(ttPrice-parseInt(price));
        }
    };
    
    const allCheckedHandler = (isChecked) => {
        if (isChecked) {
            setCheckedProd(new Set(list.map(({ gb_idx }) => gb_idx)));
            setIsAllChecked(true);
            setTtPirce(parseInt(state.tot_price))
        } else {
            checkedProd.clear();
            setCheckedProd(setCheckedProd);
            setIsAllChecked(false);
            setTtPirce(0)
        }
      };
    
    const checkHandler = ({ target }) => {
            setChecked(!bChecked);
            allCheckedHandler(target.checked);
    };

    //장바구니 삭제
    // const basketDel = ()=> {
    //     const arrS = Array.from(checkedProd).join(',');
    //     console.log(arrS,checkedProd)
    //     dispatch(totalMesThunk("goods_del",{sn:arrS}));

    // }
    const basketOrder = ()=> {
        dispatch(totalMesThunk("order_proc",{str_gb_idx:state.str_gb_idx,tot_price:state.tot_price}));
    }
    const basketOrderSel = ()=> {
        const arrS = Array.from(checkedProd).join(',');
        dispatch(totalMesThunk("order_proc",{str_gb_idx:arrS,tot_price:ttPrice}));
    }

    const confirmModal = () =>{
        dispatch(totalMesInit());
        dispatch(totalListThunk("basket_list",{}));
    }


    useEffect(() => {
        if(list){
            allCheckedHandler(true);
            setChecked(true);
            setTtPirce(parseInt(state.tot_price));
        }
        return () => {
            
        }
    }, [list])
    return (
        <Wrapper>
            <Head title="장바구니" subtit="KGB의 장바구니입니다"/>
            <ContentArea>
                <CartLists list={list} checkedItemHandler={checkedItemHandler} allCheckedHandler={allCheckedHandler} checkHandler={checkHandler} bChecked={bChecked} isAllChecked={isAllChecked}/>
                {loading && <Loading></Loading>}
                {mesLoading && <Loading></Loading>}
                <ConfirmModal open={result === undefined ? false : true}
                    text={result ==="failed" || result ===undefined ? "실패하였습니다.": message}
                    onsubmit={confirmModal}
                ></ConfirmModal> 
               
                <BtnArea1>
                    <Button  bg="#404345" color="#ffffff" text="선택주문"  ht="44px" fontSize="12px" mgt="48px" onclick={basketOrderSel}></Button>
                    {/* <Button onclick={onsubmit} bg="#3397B9" color="#ffffff" text="선택삭제"  ht="44px" fontSize="12px" mgt="48px" onclick={basketDel}></Button> */}
                </BtnArea1>
                <TotalPrice>
                    <Border>
                        <Row dt='상품금액' dd={state.tot_price? parseInt(state.tot_price).toLocaleString() : '-'+"원"} ddColor="#333333" ddWeight="bold"/>
                        <Row dt='배송비' dd={`0원`}  ddColor="#333333" ddWeight="bold"/>
                    </Border>
                    <Total>
                        <Row dt='결제 예정금액' dtSize="15px" dd={state.tot_price? parseInt(state.tot_price).toLocaleString() : '-'+"원"} ddSize="14px" ddColor="#009B90" ddWeight="bold"/>
                    </Total>
                </TotalPrice>
                </ContentArea>  
                <PaySection>
                    <PayTitle>결제수단</PayTitle>
                    <Tabs>
                        {/* <TabName isCard={true} className={tab === 0 ? "selected": ""} onClick={()=>setTab(0)}><span>카드결제</span></TabName> */}
                        <TabName isCard={false}  className={tab === 1 ? "selected": ""} onClick={()=>setTab(1)}><span>현금결제</span></TabName>
                    </Tabs>
                    <PayBox type="cart" isCard={false} />
                    <Button bg="#3397B9" color="#ffffff" text="전체주문" h="44px" fs="13px" mgt="30px" onclick={basketOrder}></Button> 
                </PaySection>
        </Wrapper>
    );
}

export default Cart;