import React, {useState}  from 'react';
import H1 from '../components/commonStyle/H1'
import Button from '../components/commonStyle/Button'
import GroupTitle from '../components/commonStyle/GroupTitle'
import InputGroup from '../components/commonStyle/InputGroup'

import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';


const Wrapper = styled.div`
    height: 100vh;
`;
const TopBg = styled.div`
    position:relative;
    top:0;
    left:0;
    right:0;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 0 0 0 30px;
    padding-bottom: 56px;

`;
const ContentArea = styled.div`
    position: relative;
    ${Gutter()};
`

const Box = styled.div`
`

const selectOptions = ['이사형태1', '이사형태2']


function Team3_1() {
  return (
    <>
      <Wrapper>
        <TopBg>
            <H1 title="개인오더" subtit="KGB의 방문견적서 내역입니다"></H1>
        </TopBg>
        <ContentArea>
            <GroupTitle title="고객정보"/>
            <InputGroup id="customerName" title="고객명"/>
            <InputGroup id="customerTel0" title="대표전화 (SMS)"/>
            <InputGroup id="customerTel1" title="전화번호"/>
        </ContentArea>  
        <div>
          <select name="이사형태" placeholder="이사형태를 선택해주세요">
            <option value="">이사형태를 선택해주세요</option>
            <option value="형태 1">형태 1</option>
            <option value="형태 2">형태 2</option>
            <option value="형태 3">형태 3</option>
            <option value="형태 4">형태 4</option>
            <option value="형태 5">형태 5</option>
            <option value="형태 6">형태 6</option>
          </select>
          <div>
            이사정보
            <div>
              <div>
                이사날짜
              </div>
              <input type="date" />
            </div>
          </div>
          <div>
            정보입력
            <div>
              <div>
                출발지 주소
              </div>
              <input type="text" />
              <button>
                주소찾기
              </button>
              <input type="text"/>
            </div>
            <div>
              <div>
                도착지 주소
              </div>
              <input type="text" />
              <button>
                주소찾기
              </button>
              <input type="text"/>
            </div>
          </div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
        </div>
      </Wrapper>
    </>
  );
}

export default Team3_1;