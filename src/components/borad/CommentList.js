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
function CommentList({list}) {
  return (
    <Wrapper>
        <Title>
            <GroupTitle title="댓글"/>
            {list && <span>{list.length}</span>}
        </Title>
        {list && list.map((item,index) => 
          <Comment key={index} text={item.as_content}>
          </Comment>
        )}
        {/* map합수로 comment들어가기? */}
        
    </Wrapper>
  );
}

export default CommentList;