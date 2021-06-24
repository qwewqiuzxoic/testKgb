import React, { useEffect }  from 'react';
import Row from '../components/bill/Row';
import Button from '../components/commonStyle/Button';
import ProdOption from '../components/Prod/ProdOption';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { totalListThunk, totalMesThunk } from '../redux/thunkFn/total.thunk';
import Loading from '../components/commonStyle/Loading';
import ConfirmModal from '../components/base/ConfirmModal';
import { totalMesInit } from '../redux/actionFn/total';

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

function arrayAdd (arr,idx,p) {
    var array = [...arr];
    array[idx] = p
    return array
}
function arrayDelUndifinde(arr){
  return arr.filter(
    (element, i) => element !== undefined || element === 0
  );
}
function ProdDetail({match}) {
    const sn =  match.params.sn;
    const name =  match.params.goods;
    const price = match.params.price;
    const [tPrice, setTPrice] = useState(0);
    const [basket, setBasket] = useState({
        gs_idx:[],
        optionname:[],
        price:[],
        cnt:[]
    })
    const FnSetBasket = (idx,option ,name ,price, number) =>{
        console.log(idx,option ,name ,price, number)
        setBasket(basket => ({
            ...basket,
            gs_idx:arrayAdd(basket.gs_idx,idx,option),
            optionname:arrayAdd(basket.optionname,idx,name),
            price:arrayAdd(basket.price,idx,price),
            cnt:arrayAdd(basket.cnt,idx,number),
        }))
    }
    const listRes = useSelector(state =>state.totalListReducer);
    const mesRes = useSelector(state =>state.totalMesReducer);
    const dispatch = useDispatch();
    const basketAdd = () =>{
        const data = {
            good_name:name,
            photo_sn:sn,
            gs_idx:arrayDelUndifinde(basket.gs_idx).join(","),
            optionname:arrayDelUndifinde(basket.optionname).join(","),
            price:arrayDelUndifinde(basket.price).join(","),
            cnt:arrayDelUndifinde(basket.cnt).join(",")
        }
        if(data.gs_idx === ""){
            return
        }
        dispatch(totalMesThunk("goods_basket_add",data));
    }
    const confirmSubmit = () =>{
        dispatch(totalMesInit());
        dispatch(totalListThunk("goos_view",{good_name:name,photo_sn:sn}));
        setTPrice(0);
        setBasket({
            gs_idx:[],
            optionname:[],
            price:[],
            cnt:[]
        })
    }
    useEffect(() => {
        dispatch(totalListThunk("goos_view",{good_name:name,photo_sn:sn}));
        return () => {
            
        }
    }, [])

    return (
        <Wrapper>
            <ImgArea>
             <img src={listRes.goods_img ? listRes.goods_img : null} alt="자재사진"/>
            </ImgArea>
            <DetailBox>
                <Name>{listRes.goods_name && listRes.goods_name}</Name>
                <Price>{price}<span>원</span></Price>
                <Row dt="상품재고확인" dtSize="13px" dd="294" ddColor="#404345" ddWeight="bold" ddSpan='개'/>
                {listRes.list && listRes.list.map ((item, index)=> (
                    <ProdOption key={index} index={index} FnSetBasket={FnSetBasket} tPrice={tPrice} setTPrice={setTPrice} name={item.option_name} option={item.gs_idx} price={item.price}></ProdOption>
                ))}
                <TotalArea>
                    <Row dt="총 결제금액"  dd={tPrice}ddColor="#009B90" ddSize=" 18px" ddWeight="bold" ddSpan='원' spanSize="11px"/>
                </TotalArea>
                <BtnArea>
                    <Button onclick={basketAdd} bg="#404345" color="#ffffff" text="장바구니"  height="44px" fontSize="12px" mgt="30px"></Button>
                    {/* <Button onclick={onsubmit} bg="#3397B9" color="#ffffff" text="결제"  height="44px" fontSize="12px" mgt="30px"></Button> */}
                </BtnArea>

            </DetailBox>
            {listRes.loading && <Loading></Loading>}

            <ConfirmModal open={mesRes.result !== "success" ? false: true}text={mesRes.message} onsubmit={confirmSubmit}></ConfirmModal>

        </Wrapper>
  );
}

export default ProdDetail;