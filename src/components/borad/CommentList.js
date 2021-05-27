import React from 'react';
import GroupTitle from '../commonStyle/GroupTitle'
import Comment from './Comment'


import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';

const Wrapper = styled.div`

`;
const Title = styled.div`
    ${FlexBox('left')};
    padding-bottom:10px;
    border-bottom: 2px solid #DFE5EA;

    span{
        margin-left:4px;
        margin-top:26px;
        ${ChangeFont(true)}
    }
`;
function CommentList({}) {
  return (
    <Wrapper>
        <Title>
            <GroupTitle title="댓글"/>
            <span>4</span>
        </Title>
        {/* map합수로 comment들어가기? */}
        <Comment/>
    </Wrapper>
  );
}

export default CommentList;