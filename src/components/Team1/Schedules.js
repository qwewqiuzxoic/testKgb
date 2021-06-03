import React from 'react';
import styled from 'styled-components';
import { FlexBox, Gutter, ChangeFont } from '../commonStyle';

const Wrapper = styled.div`
  margin:20px auto;
`;
const Box = styled.div`
    position:relative;
    background: #FFFFFF;
    box-shadow: 4px 4px 20px #33333314;
    margin-bottom:15px;
    ${Gutter('14px 18px')};
    &.color0:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:#43C9F0;
    }
    &.color1:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:#28F173;
    }
    &.color2:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:#FFC034;
    }
    &.color3:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:#EE883E;
    }
    &.color4:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:#FF4D55;
    }
`
const Row = styled.div`
    ${FlexBox()}
    margin-bottom:4px;
    
`
const Name = styled.div`
        font-weight: bold;
    span.color0{
        color : #43C9F0;
    }
    span.color1{
        color : #28F173;
    }
    span.color2{
        color : #FFC034;
    }
    span.color3{
        color : #EE883E;
    }
    span.color4{
        color : #FF4D55;
    }
`
const Call = styled.div`
    ${ChangeFont(true, 200)};
    color: #82898E;


`
const Dt = styled.div`
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizes.s};
    color:  ${(props) => props.theme.colors.grey2};
`
const Dd = styled.div`
    ${ChangeFont(true, 200)};
`

function Schedules({data}) {
    console.log("여기는")
    console.log(data)
    console.log("여기는")
  return (
    <Wrapper>
        {data.map((schedule, index)=> (
            <Box key={index} className={`color${schedule.state}`}>
                <Row>
                    <Name><span className={`color${schedule.state}`}>[{schedule.state}]</span>{schedule.name}</Name>
                    {/* <Call>{schedule.call}</Call> */}
                    <Call>00000000</Call>
                </Row>
                <Row>
                    <Dt>작업일</Dt>
                    <Dd>{schedule.date}</Dd>
                </Row>
                <Row>
                    <Dt>총금액</Dt>
                    <Dd>{schedule.price}</Dd>
                </Row>
             </Box>
        ))}
    </Wrapper>
  );
}

export default Schedules;