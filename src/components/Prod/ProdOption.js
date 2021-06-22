import React, { useState }  from 'react';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';
import styled from 'styled-components';


const Wrapper = styled.div`
    background: #F3F7FB;
    padding:10px;
    border-top: 1px solid #DFE5EA;

`;
const Name = styled.div`

`;
const Layout = styled.div`
    ${FlexBox()};
    align-items: center;
    margin-top:6px;
`;
const Qt = styled.div`
    ${FlexBox()};
    align-items: center;
    border: 1px solid #DFE5EA;
    background: #FFFFFF;
    border-radius:14px;
    overflow: hidden;
    input{
        ${ChangeFont(true, 300)};
        text-align: center;
        width:40px;
    }

`;
const BtnQ = styled.button`    
    width:28px;
    height:28px;
    background-color:#fff;
    background-image:url(${(props)=>props.isPlus ? process.env.PUBLIC_URL + '/images/ico_plus_grey.png' : process.env.PUBLIC_URL + '/images/ico_minus.png'});
    background-size: 8px;
    background-repeat: no-repeat;
    background-position: center;
`;
const Price = styled.div`
    ${ChangeFont(true, 400)};
    span{
        font-size: ${(props)=>props.theme.fontSizes.s};
        font-weight: normal;
    }
`;


function Products({name, option}) {
    const [number, setNumber] = useState(0);
    const increaseNumber = () => { // number의 값을 증가시키는 함수
        setNumber(number + 1);
      };
    
      const decreaseNumber = () => { // number의 값을 감소시키는 함수
        setNumber(number-1 > 0 ? number - 1: 0);

      };
      const handleInputChange = (e) => { 
        setNumber(parseInt(e.target.value))
      };

  return (
      <Wrapper>
        <Name>{ name } / { option }</Name>
        <Layout>
            <Qt>
                <BtnQ onClick={decreaseNumber} isPlus={false}/>
                <input type='number' value={number} onChange={(e)=>handleInputChange(e)}/>
                <BtnQ onClick={increaseNumber} isPlus={true}/>
            </Qt>
            <Price>{parseInt(35200 * number).toLocaleString()}<span>원</span></Price>
            {/* 35200 : 제품 가격 */}
        </Layout>
      </Wrapper>
  );
}

export default Products;