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
function TotalPriceInfo({CostMove, CostOption, MoneyDiscount, CostTotal, MoneyPromise, MoneyRemain, Comment01_txt}) {
  return (
    <Wrapper>
        <Box>
            <Row>
                <Dt>이사요금</Dt>
                <Dd>{CostMove}원</Dd>
            </Row>
            <Row>
                <Dt>옵션요금</Dt>
                <Dd>{CostOption}원</Dd>
            </Row>
            <Row>
                <Dt>추가할인</Dt>
                <Dd>{MoneyDiscount}원</Dd>
            </Row>
            <Row>
                <Dt>합계</Dt>
                <Dd>{CostTotal}원</Dd>
            </Row>
            <Row>
                <Dt>계약금</Dt>
                <Dd>{MoneyPromise}원</Dd>
            </Row>
            <Row>
                <Dt>잔금</Dt>
                <Dd>{MoneyRemain}원</Dd>
            </Row>
            <Row>
                <Dt>특이사항</Dt>
                <Dd>{Comment01_txt}</Dd>
            </Row>
         </Box>
    </Wrapper>
  );
}


export default TotalPriceInfo;