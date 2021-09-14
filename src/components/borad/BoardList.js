import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexBox, ChangeFont } from '../commonStyle';

const Wrapper = styled.div`
    background: ${(props) => props.className === 'important' ? '#F3F7FB' : props.theme.colors.white};
    border-radius: ${(props) => props.index === 0 ? '4px 4px 0 0' : '0'};
    border-bottom:1px solid #DFE5EA;
    padding:15px;
`;
const Title = styled.div`
  font-size: 13px;
  overflow: hidden;
	text-overflow: ellipsis;
	word-wrap: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 2; /* ellipsis line */
	-webkit-box-orient: vertical;
	/* webkit 엔진을 사용하지 않는 브라우저를 위한 속성. */
	/* height = line-height * line = 1.2em * 3 = 3.6em  */
	line-height: 1.2em;
	height: 3em;
  &.important, &.notice{
    display: static;
    -webkit-line-clamp: 1; /* ellipsis line */
    -webkit-box-orient: vertical;
    line-height: 1.2em;
    height: 1.2em;
    margin-bottom:8px;
  }
  span{
    color:#82898E;
    font-size:13px;
  }
`;
const NoticeLabel = styled.div`
  display: ${(props) => props.className === 'important' || props.className === 'notice' ? 'inline-block' : 'none'};
  font-size: ${(props) => props.theme.fontSizes.s};
  padding:2px 8px;
  border: 1px solid #404345;
  border-radius:20px;
  margin-right:5px;
`;
const PostInfo = styled.div`
  ${FlexBox('left')}
  span{
    display: ${(props) => props.className === 'important' || props.className === 'notice' ? 'none' : 'block'};
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


function BoardList({index,boardCode, board_sn, cnt, countview, loginname, regdate, title, tname, classname}) {
   
  return (
    <Wrapper index={index} className={classname && classname}>
        <Title >
          <Link to={`/boarddetail/${board_sn}/${boardCode}`}>
          <p><NoticeLabel className={classname && classname}>공지</NoticeLabel>{title}</p>
          </Link>
        </Title>
        <PostInfo >
          <Writer>
            {boardCode === "1" && tname}  
            {loginname}
          </Writer>
          <span></span>
          <Date>{regdate}</Date>
        </PostInfo>
    </Wrapper>
  );
}

export default BoardList;