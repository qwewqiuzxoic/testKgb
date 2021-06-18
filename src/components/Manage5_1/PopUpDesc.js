import React, { useState } from 'react';
import { FlexBox, Gutter, LabelStyle, ChangeFont } from '../commonStyle';
import InputGroup from '../commonStyle/InputGroup';
import TextAreaGroup from '../commonStyle/TextAreaGroup';

import styled from 'styled-components';
import { compose } from 'redux';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
`;
const Header = styled.div`
    position:relative;
    height:40px;
    border-bottom: 1px solid #DFE5EA;
    img{
        position:absolute;
        right:12px;
        width:35px;
    }
`;
const Content = styled.div`
    ${Gutter('15px')};
`
const TopCont = styled.div`
    border-bottom: 1px solid #DFE5EA;
    padding-bottom:15px;
`;
const Row = styled.div`
    ${FlexBox()};
    align-items: top;
    margin-bottom:6px;   
`
const Dt = styled.div`
    font-weight: bold;
    color:  #ACB6BC;
    min-width: 100px;
`
const Dd = styled.div`
    ${ChangeFont(true)};
    text-align:right;
`
const BottomCont = styled.div`
    padding-top:10px;
`
const Label = styled.div`
    ${LabelStyle()};
    margin-top: 10px;

`
const Name = styled.div`
  display:inline-block;
  font-size: ${(props) => props.theme.fontSizes.s};
  color:  ${(props) => props.theme.colors.grey2};
  margin:10px 0 5px;
  font-weight:bold;
`
const Contents = styled.div`
  width:100%;
  padding:15px;
  text-align: ${(props) => props.textAlign ? props.textAlign : 'left'};
  background:#F3F7FB;
  border-radius: 4px;

`;
const InnerCont = styled.div`
`;

function PopUpDesc() {

    const {data,loading} = useSelector(state => state.pictureCheckDetailReducer)
  if(loading){
      return (
          <div>
              로딩중
          </div>
      )
  } else{
    return (
        <Wrapper>
           <Header>
                  <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="icon" />
              </Header>
              <Content>
                  <TopCont>
                      <Row>
                          <Dt>점검일</Dt>
                          <Dd>{data.daymove}</Dd>
                      </Row>
                      <Row>
                          <Dt>실사자</Dt>
                          <Dd>{data.namechecker}</Dd>
                      </Row>
                      <Row>
                          <Dt>고객명</Dt>
                          <Dd>{data.custname}</Dd>
                      </Row>
                      <Row>
                          <Dt>지역</Dt>
                          <Dd>{data.region}</Dd>
                      </Row>
                      <Row>
                          <Dt>출발지주소</Dt>
                          <Dd>{data.staddr}</Dd>
                      </Row>
                      <Row>
                          <Dt>도착지주소</Dt>
                          <Dd>{data.edaddr}</Dd>
                      </Row>               
                  </TopCont>
                  <BottomCont>
                  <Name>특기사항</Name>
                    <Contents>
                    <InnerCont dangerouslySetInnerHTML={ {__html: data.MemoCheck} }>
                    </InnerCont>
                  </Contents>
                  <Name>지적사항</Name>
                    <Contents>
                    <InnerCont dangerouslySetInnerHTML={ {__html: data.MemoPoint} }>
                    </InnerCont>
                  </Contents>
                  <Name>현장 실사의견</Name>
                    <Contents>
                    <InnerCont dangerouslySetInnerHTML={ {__html: data.MemoSpecial} }>
                    </InnerCont>
                  </Contents>
                    {
                        data.list && !data.Content ?  
                        
                            data.list.length === 0 ?
                            <div>
                                <Label>사진</Label>
                                <div>사진없음</div>
                            </div>
                            :
                            data.list.map(item=>
                                <div>
                                    <Label>사진</Label>
                                    <img src={`http://mis.kgb.co.kr/BM/API/auth/file_binary.asp?fileSn=${item.img_bizcheck}&codeFile=체크리스트`}/>
                                    <br />
                                </div>
                                
                                )
                        
                        :
                            data.Content.length === 0 ?
                            <div>
                                <Label>사진</Label>
                                <div>사진없음</div>
                            </div>
                            :
                            <div>
                                <Label>사진</Label>
                                <div dangerouslySetInnerHTML={ {__html: data.Content} }></div>
                            </div>
                    
                    }
                      {/* <Label>사진</Label>
                      <img src={process.env.PUBLIC_URL + '/images/dummyImg.jpg'} alt="dummy" /> */}
                  </BottomCont>
              </Content>
        </Wrapper>
        
    );
  }
  
}

export default PopUpDesc;