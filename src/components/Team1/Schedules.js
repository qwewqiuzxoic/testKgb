import React from 'react';
import styled from 'styled-components';
import { FlexBox, Gutter, ChangeFont } from '../commonStyle';

const Wrapper = styled.div`
  ${Gutter()};
  margin:20px auto;
`;
const Box = styled.div`
    position:relative;
    background: #FFFFFF;
    box-shadow: 4px 4px 20px #33333314;
    margin-bottom:15px;
    ${Gutter('14px 18px')};
    &:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:${(props) => props.color}     
    }
`
const Row = styled.div`
    ${FlexBox()}
    margin-bottom:4px;
    
`
const Name = styled.div`
        font-weight: bold;
    span{
        color : ${(props) => props.color};
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

const schedules = [
    {
        state:'계약',
        name: '최선정',
        call: '010-1234-5678',
        date: '2021.01.01',
        price: '1,250,000',
        color: '#FFC034'
    },
    {
        state:'계약',
        name: '최선정',
        call: '010-1234-5678',
        date: '2021.01.01',
        price: '1,250,000',
        color: '#28F173'
    },
]

function Schedules({data}) {
 
  return (
    <Wrapper>
        {data.map((schedule, index)=> (
            <Box key={index} color="#28F173">
                <Row>
                    <Name color={schedule.color}><span>[{schedule.state}] </span>{schedule.name}</Name>
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