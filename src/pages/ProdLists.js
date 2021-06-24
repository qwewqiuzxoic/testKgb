import React, { useEffect }  from 'react';
import Head from '../components/commonStyle/Head';
import Products from '../components/Prod/Products';
import { FlexBox, Gutter } from '../components/commonStyle';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { totalListThunk } from '../redux/thunkFn/total.thunk';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
`;
const ContentArea = styled.div`
    ${Gutter()};
    margin-top:30px;
`;
const Layout = styled.div`
    ${FlexBox()};
    flex-wrap: wrap;
    >div{
      width:48%;
    }
`;


const prods = [
    {
        name : "상품이름상품이름상품이름",
        img: 'dummy.jpg'
    },
    {
        name : "상품명상품명상품명",
        img: 'dummy.jpg'
    },
    {
      name : "상품이름상품이름상품이름",
      img: 'dummy.jpg'
  },
  {
      name : "상품명상품명상품명상품명상품명",
      img: 'dummy.jpg'
  },
]
function ProdLists() {
    const dispatch = useDispatch();
    const mesRes = useSelector(state =>state.totalMesReducer);
    const listRes = useSelector(state =>state.totalListReducer);
    const clickDet = (name,sn)=>{
        dispatch(totalListThunk("goos_view",{good_name:name,photo_sn:sn}));
    }
    useEffect(() => {
        dispatch(totalListThunk("goods_list",{}));
        return () => {
            
        }
    }, [])
  return (
      <Wrapper>
        <Head title="자재주문" subtit="KGB의 자재주문입니다"/>
        <ContentArea>
            <Layout>
            {(listRes.list && listRes.list.length!== 0) && listRes.list.map((item, index)=> (
                <Link to={`/ProdDetail/${item.photo_sn===""?"0000":item.photo_sn}/${item.goods_name}/${item.price}`} >
                <Products key={index} name={item.goods_name} img={item.str_img} price={item.price}></Products>
                </Link>
            ))}
            </Layout>
        </ContentArea>  
      </Wrapper>
  );
}

export default ProdLists;