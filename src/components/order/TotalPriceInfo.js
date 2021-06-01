import React from 'react';
import styled from 'styled-components';
import { Gutter, ChangeFont, FlexBox} from '../commonStyle';


const Wrapper = styled.div`
margin-top:10px;
`;
const Box = styled.div`
    position:relative;
    background: #FFFFFF;
    box-shadow: 4px 4px 10px #33333314;
    margin-bottom:15px;
    border-radius: 4px;
    ${Gutter('15px')};
`;
const Row = styled.div`
    ${FlexBox()};
    align-items: center;
    margin-bottom:4px;
`
const Dt = styled.div`
    font-weight: bold;
    color:  ${(props) => props.theme.colors.grey2};
`
const Dd = styled.div`
    ${ChangeFont(true, 200)};
`
function TotalPriceInfo() {
  return (
    <Wrapper>
        <Box>
            <Row>
                <Dt>이사요금</Dt>
                <Dd>1,040.000원</Dd>
            </Row>
            <Row>
                <Dt>옵션요금</Dt>
                <Dd>130,000원</Dd>
            </Row>
            <Row>
                <Dt>추가할인</Dt>
                <Dd>0원</Dd>
            </Row>
            <Row>
                <Dt>합계</Dt>
                <Dd>1,170,000원</Dd>
            </Row>
            <Row>
                <Dt>계약금</Dt>
                <Dd>0원</Dd>
            </Row>
            <Row>
                <Dt>잔금</Dt>
                <Dd>1,170,000원</Dd>
            </Row>
            <Row>
                <Dt>특이사항</Dt>
                <Dd>기사님 차량에 동승하고 싶어요</Dd>
            </Row>
         </Box>
    </Wrapper>
  );
}


export default TotalPriceInfo;