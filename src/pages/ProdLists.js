import React  from 'react';
import Head from '../components/commonStyle/Head';
import Products from '../components/Prod/Products';
import { FlexBox, Gutter } from '../components/commonStyle';
import styled from 'styled-components';

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
  return (
      <Wrapper>
        <Head title="자재주문" subtit="KGB의 자재주문입니다"/>
        <ContentArea>
            <Layout>
            {prods.map((item, index)=> (
                <Products name={item.name} img={item.img}></Products>
            ))}
            </Layout>
        </ContentArea>  
      </Wrapper>
  );
}

export default ProdLists;