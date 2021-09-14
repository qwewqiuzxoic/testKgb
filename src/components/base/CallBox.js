import React from 'react';
import styled from 'styled-components';
import { Gutter, FlexBox, ChangeFont } from '../commonStyle';


const Wrapper = styled.a`
    display: block;
    ${Gutter('10px 15px')}
    width: 49%;
    background: #FFFFFF;
    box-shadow: 7px 7px 20px #33333314;
    border-radius: 4px;
`
const Name = styled.div`
    font-size:13px;
    font-weight:bold;
    color: ${(props) => props.color};
`
const CallArea = styled.div`
    ${FlexBox('left')}
    margin-top: 5px;
`
const IconBox = styled.div`
    width:20px;
    height:20px; 
    padding:5px;
    border-radius: 10px;
    background: ${(props) => props.color};
    margin-right: 8px;
`
const Number = styled.div`
    ${ChangeFont(true,300)};
    color:#ACB6BC;
`

function CallBox({name, num, color}) {
  return (
    <Wrapper href={`tel:${num}`}>
        {/* 위에 담당자 전화번호 넣어주세요 */}
        <Name color={color}>{name}</Name>
        <CallArea>
            <IconBox color={color}>
                <img src={process.env.PUBLIC_URL + '/images/ico_call.svg'} alt="KGB" />
            </IconBox>
            <Number>{num}</Number>
        </CallArea>
    </Wrapper>
  );
}

export default CallBox;