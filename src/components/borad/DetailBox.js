import React from 'react';
import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';

const Wrapper = styled.div`
    background: ${(props) => props.theme.colors.white};
    border-radius: 4px;
    padding:16px 14px;
`;
const Title = styled.div`
  font-size: 13px;
  span{
    color:#82898E;
    font-size:13px;
  }
`;
const PostInfo = styled.div`
  ${FlexBox()}
  padding-top: 4px;
  padding-bottom:8px;
  border-bottom: 1px solid #DFE5EA;
  font-size: ${(props) => props.theme.fontSizes.s};
  span{
    content:'';
    width:1px;
    height:10px;
    background: #DFE5EA;
    margin: 3px 8px;
    vertical-align: middle;
  }
`;
const Writer = styled.div`
  color: #82898E;
`;
const Date = styled.div`
  ${ChangeFont(true, 200)};
  font-size: ${(props) => props.theme.fontSizes.s};
  color:#ACB6BC;
`;
const Desc = styled.div`
    padding-top:17px;
    padding-bottom:37px;
    color:#82898E;
`;

function DetailBox({title, subtit}) {
  return (
    <Wrapper>
        <Title>정말 최고의 이사였어요 너무 고생하셨어요 감사합니다 내용이 노출됩니다 내용이 노출됩니다</Title>
        <PostInfo>
          <Writer>노지수 (서울 1팀)</Writer>
          <span></span>
          <Date>2021 .01 .01</Date>
        </PostInfo>
        <Desc>
            <img src={process.env.PUBLIC_URL + `/images/dummyImg.jpg`}/>            
            정말 최고의 이사였어요 너무 고생하셨어요 감사합니다내용이 노출됩니다 내용이 노출됩니다 내용이 노출됩니다 내용이 노출됩니다 내용이 노출됩니다 내용이 노출됩니다
        </Desc>
    </Wrapper>
  );
}

export default DetailBox;