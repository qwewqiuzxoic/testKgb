import React from 'react';
import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';

const Wrapper = styled.div`
    background: ${(props) => props.theme.colors.white};
    border-radius: 4px;
    padding:15px;
    margin-bottom:8px;
    box-shadow: 4px 4px 5px #33333314;
    cursor:pointer;
`;
const Layout = styled.div`
  ${FlexBox()}
  margin-bottom:6px;
  align-items: center;
`;
const Title = styled.div`
  font-size: 13px;
  font-weight:bold;
  overflow: hidden;
	text-overflow: ellipsis;
`;
const Date = styled.div`
  ${ChangeFont(true)};
  font-size: ${(props) => props.theme.fontSizes.s};
  color:#ACB6BC;
`;


const PostInfo = styled.div`
  ${FlexBox('left')}
  align-items: center;
`;
const Content = styled.div`
`;

const ContentDate = styled.div`
  ${ChangeFont(true,200)};
  font-size: ${(props) => props.theme.fontSizes.xs};
  color:#ACB6BC;
  margin-left:4px;
`;


function BoardList8_1({title, regdate, board_sn, index, onClick}) {
   
  return (
    <Wrapper index={index} onClick={onClick}>
      <Layout>
        <Title>{title}</Title>
        <Date>{regdate}</Date>
      </Layout>
      <PostInfo>
        <Content>상조회비 입출금내용</Content>
        <ContentDate>{regdate} 기준</ContentDate>
      </PostInfo>
    </Wrapper>
  );
}

export default BoardList8_1;