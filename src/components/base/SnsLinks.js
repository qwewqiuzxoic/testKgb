import React from 'react';
import styled from 'styled-components';
import { Gutter, FlexBox, ChangeFont } from '../commonStyle';


const Wrapper = styled.div`

`
const Title = styled.div`
    position:relative;
    ${ChangeFont(true)};
    text-align: center;
    &:before{
        position:absolute;
        top:8px; 
        left:0;
        content:'';
        background: #DFE5EA;
        width:calc(50% - 50px);
        height:1px;
    }
    &:after{
        position:absolute;
        top:8px; 
        right:0;
        content:'';
        background: #DFE5EA;
        width:calc(50% - 50px);
        height:1px;
    }
`
const CallArea = styled.div`
    ${FlexBox('left')}
    margin-top: 5px;
`
const IconBox = styled.div`
    ${FlexBox('center')}
    img{
        width:30px;
        height:30px;
        margin:10px;
    }

`
const Number = styled.div`
`

function SnsLinks({name, num, color}) {
  return (
    <Wrapper>
        <Title>KGB SNS</Title>
        <IconBox color={color}>
            <img src={process.env.PUBLIC_URL + '/images/sns_f.svg'} alt="facebook" />
            <img src={process.env.PUBLIC_URL + '/images/sns_i.svg'} alt="instagram" />
            <img src={process.env.PUBLIC_URL + '/images/sns_y.svg'} alt="youtube" />
        </IconBox>
    </Wrapper>
  );
}

export default SnsLinks;