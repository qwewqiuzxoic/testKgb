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
const Dd2 = styled.span`
    ${ChangeFont(true, 200)};
    color:  ${(props) => props.theme.colors.grey2};
    font-weight: bold;
`
const Dd = styled.div`
    ${ChangeFont(true, 200)};
    font-weight: bold;
`
function TotalPriceInfo({CostMove, CostOption, MoneyDiscount, CostTotal, MoneyPromise, MoneyRemain, Comment01_txt,setOrderChange}) {
  return (
    <Wrapper>
        <Box>
            <Row>
                {/* 수정가능 */}
                <Dt>이사요금</Dt>
                <Dt>
                    <input style={{width:"100px",textAlign:"right", fontWeight: "bold"}} type="text" value={CostMove.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} name="CostMove" onChange={(e)=>setOrderChange(e)}/>
                    <span>
                        원
                    </span>
                </Dt>
                
            </Row>
            <Row>
                {/* 수정가능 */}
                <Dt>옵션요금</Dt>
                <Dt>
                    <input style={{width:"100px",textAlign:"right",fontWeight: "bold"}}type="text" value={CostOption.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} name="CostOption" onChange={(e)=>setOrderChange(e)}/>   
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
                    <input style={{width:"100px",textAlign:"right", fontWeight: "bold"}} type="text" value={MoneyDiscount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} name="MoneyDiscount" onChange={(e)=>setOrderChange(e)}/> 
                    {/* <Dd>{MoneyDiscount}원</Dd> */}
                    <span>
                        원
                    </span>
                </Dt>
                
            </Row>
            <Row>
                <Dt>합계</Dt>
                <Dd>{CostTotal.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}<Dd2>원</Dd2></Dd>
            </Row>
            <Row>
                {/* 수정가능 */}
                <Dt>계약금</Dt>
                <Dt>
                    <input style={{width:"100px",textAlign:"right", fontWeight: "bold"}} type="text" value={MoneyPromise.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} name="MoneyPromise" onChange={(e)=>setOrderChange(e)}/> 
                    {/* <Dd>{MoneyPromise}원</Dd> */}
                    <span>
                        원
                    </span>
                </Dt>
                
            </Row>
            <Row>
                <Dt>잔금</Dt>
                <Dd>{MoneyRemain.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}<Dd2>원</Dd2></Dd>
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