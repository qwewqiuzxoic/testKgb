import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';

const Wrapper = styled.div`
    background: ${(props) => props.theme.colors.white};
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
	height: 2.4em;
  span{
    color:#82898E;
    font-size:13px;
  }
`;
const PostInfo = styled.div`
  ${FlexBox('left')}
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


function BoardList({title, regdate, board_sn, index, loginname ,tname, cnt,countview}) {
   
  return (
    <Wrapper index={index}>
        <Title>
          <Link to={`/boarddetail/${board_sn}`}>
            {title}
          </Link>
          <span> [11]</span>
        </Title>
        <PostInfo>
          <Writer>{loginname}</Writer>
          <span></span>
          <Date>{regdate}</Date>
        </PostInfo>
    </Wrapper>
  );
}

export default BoardList;