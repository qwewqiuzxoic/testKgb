import React from 'react';
import BoardTitle from '../components/borad/BoardTitle';
import CommentBox from '../components/borad/CommentBox';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import Button from '../components/commonStyle/Button';

import styled from 'styled-components';

const Wrapper = styled.div`
    background: #FAFAFA;
`;
const ContentArea = styled.div`
    position:relative;
  ${Gutter()};
  margin-top:-40px;
`
const ContentBox = styled.div`
  background: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  padding:15px;
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
  padding-top:4px;
  padding-bottom:10px;
  border-bottom:1px solid #DFE5EA;

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
  ${ChangeFont(true,200)};
  font-size: ${(props) => props.theme.fontSizes.s};
  color:#ACB6BC;
`;
const Desc = styled.div`
  padding: 10px 0;
  img{
    margin-bottom:10px;
  }
`;
const ButtonArea = styled.div`
  ${FlexBox()}
  margin:30px 0;
`;

function BoardDetail({match}) {
  const number = match.params.number;

  return (
    <Wrapper>
        <BoardTitle/>
        <ContentArea>
          <ContentBox>
            <Title>
            정말 최고의 이사였어요 너무 고생하셨어요 감사합니다 내용이 노출됩니다 내용이 노출됩니다
            </Title>
            <PostInfo>
              <Writer>노지수(서울1팀)</Writer>
              <Date>2021.01.01</Date>
            </PostInfo>
            <Desc>
              <img src={process.env.PUBLIC_URL + '/images/dummyImg.jpg'} alt="icon" />
              <p>dfsdfsdf</p>
            </Desc>
            </ContentBox>
            <ButtonArea>
              <Button bg="#DFE5EA" color="#ACB6BC" text="수정" w="24%" h="44px" fs="12px"></Button>
              <Button bg="#DFE5EA" color="#ACB6BC" text="삭제" w="24%" h="44px" fs="12px"></Button>
              <Button bg="#3397B9" color="#ffffff" text="목록" w="49%" h="44px" fs="12px"></Button>
            </ButtonArea>
        </ContentArea>
        <CommentBox></CommentBox>
    </Wrapper>
  );
}

export default BoardDetail;