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

function Comment({text,regdate,regloginid}) {
  return (
    <Wrapper>
        <PostInfo>
          <Writer>{regloginid}</Writer>
          <Date>{regdate}</Date>
        </PostInfo>
        <Desc dangerouslySetInnerHTML={ {__html: text} }></Desc>
    </Wrapper>
  );
}

export default Comment;