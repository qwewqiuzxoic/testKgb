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
    ${FlexBox()}
    align-items: center;;
`;
const ImgArea = styled.div`
    width:95px;
    height:70px;
    border-radius: 4px;
    overflow:hidden;
    ${FlexBox()}
    img{
        width:100%;
    }
`;
const Layout = styled.div`
    width: calc(100% - 108px);
`;
const Title = styled.div`
    font-size: 13px;
    font-weight:bold;
    overflow: hidden;
	text-overflow: ellipsis;
	word-wrap: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 2; /* ellipsis line */
	-webkit-box-orient: vertical;
	/* webkit 엔진을 사용하지 않는 브라우저를 위한 속성. */
	/* height = line-height * line = 1.2em * 3 = 3.6em  */
	line-height: 1.4em;
	height: 2.8em;
`;
const Date = styled.div`
    ${ChangeFont(true)};
    font-size: ${(props) => props.theme.fontSizes.s};
    color:#ACB6BC;
    margin-top:4px;
`;


function ImgBoard({setChangeStep, title, sn, list_img, regdate}) {
   
  return (
    <Wrapper onClick={()=>setChangeStep(sn)}>
        <ImgArea>
            <img src={list_img} alt="icon" />
        </ImgArea>
        <Layout>
            <Title>
                {title}
            </Title>
            <Date>{regdate}</Date>
        </Layout>
    </Wrapper>
  );
}

export default ImgBoard;