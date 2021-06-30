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
function TotalPriceInfo({CostMove, CostOption, MoneyDiscount, CostTotal, MoneyPromise, MoneyRemain, Comment01_txt,setOrderChange}) {
  return (
    <Wrapper>
        <Box>
            <Row>
                {/* 수정가능 */}
                <Dt>이사요금</Dt>
                <Dt>
                    <input style={{width:"100px",textAlign:"right"}} type="text" value={CostMove} name="CostMove" onChange={(e)=>setOrderChange(e)}/>
                    <span>
                        원
                    </span>
                </Dt>
                
            </Row>
            <Row>
                {/* 수정가능 */}
                <Dt>옵션요금</Dt>
                <Dt>
                    <input style={{width:"100px",textAlign:"right"}}type="text" value={CostOption} name="CostOption" onChange={(e)=>setOrderChange(e)}/>   
                    {/* <Dd>{CostOption}원</Dd> */}
                    <span>
                        원
                    </span>
                </Dt>
                
            </Row>
            <Row>
                {/* 수정가능 */}
                <Dt>추가할인</Dt>
                <Dt>
                    <input style={{width:"100px",textAlign:"right"}} type="text" value={MoneyDiscount} name="MoneyDiscount" onChange={(e)=>setOrderChange(e)}/> 
                    {/* <Dd>{MoneyDiscount}원</Dd> */}
                    <span>
                        원
                    </span>
                </Dt>
                
            </Row>
            <Row>
                <Dt>합계</Dt>
                <Dd>{CostTotal}원</Dd>
            </Row>
            <Row>
                {/* 수정가능 */}
                <Dt>계약금</Dt>
                <Dt>
                    <input style={{width:"100px",textAlign:"right"}} type="text" value={MoneyPromise} name="MoneyPromise" onChange={(e)=>setOrderChange(e)}/> 
                    {/* <Dd>{MoneyPromise}원</Dd> */}
                    <span>
                        원
                    </span>
                </Dt>
                
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