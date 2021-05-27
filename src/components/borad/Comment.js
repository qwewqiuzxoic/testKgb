import React from 'react';


import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';

const Wrapper = styled.div`
    padding: 8px 12px;
    border-bottom: 2px solid #DFE5EA;
`;
const PostInfo = styled.div`
  ${FlexBox()}
  padding-top: 4px;
  padding-bottom:8px;
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
  font-size: ${(props) => props.theme.fontSizes.m};
`;
const Date = styled.div`
  ${ChangeFont(true, 200)};
  font-size: ${(props) => props.theme.fontSizes.s};
  color:#ACB6BC;
`;
const Desc = styled.div`
    padding-bottom:10px;
    color:#82898E;
`;

function Comment({}) {
  return (
    <Wrapper>
        <PostInfo>
          <Writer>장재면</Writer>
          <span></span>
          <Date>2021 .01 .01 07:55:47</Date>
        </PostInfo>
        <Desc>60팀 장재면은 60팀장 5톤차량변경으로 다른팀으로 팀 이동을 요청합니다</Desc>
    </Wrapper>
  );
}

export default Comment;