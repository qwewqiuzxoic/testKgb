import React from 'react';
import styled from 'styled-components';
import { FlexBox, Gutter} from '../commonStyle';

const Wrapper = styled.div`
    ${FlexBox()};
    ${Gutter()};
    padding:0 12px;
    margin: 45px auto 40px;
`

const SolidBox = styled.a`
  display:block;
  ${FlexBox('space-between', 'column')};
  height:140px;
  width: ${(props) => props.width};
  background:  ${(props) => props.bg};
  box-shadow: 4px 14px 40px rgba(51, 51, 51, .1);
  border-radius: ${(props) => props.radius || "12px"};
  padding: ${(props) => props.padding};
`
const TextArea = styled.div`
  p{
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes.m};
    font-weight: bold;
    margin-bottom:2px;
    letter-spacing: -0.78px;
  }
  span{
    letter-spacing: -0.54px;
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes.xxs};
    color: #FFFFFF;
    opacity: 0.5;
  }
`
const ImgArea = styled.div`
  text-align: right;
  img{
      display: inline-block;
      height:28px;
      width:auto;
  }
`
function SolidBoxes() {
  const user = JSON.parse(localStorage.getItem('user'));
  const boxes = [
    {
        title : "담당자 연결",
        desc : "담당자 연결을 도와드립니다",
        bg: "#009B90",
        img: 'ico_call.png',
        num: true,
    },
    {
        title : "홈페이지 바로가기",
        desc : "홈페이지로 바로 이동하실 수 있습니다",
        bg: "#2F8DB7",
        img: 'ico_page.png',
        num:false
    },
]

  return (
    <Wrapper>
      {boxes.map((box, index)=> (
          <SolidBox key={index} title={box.title}  desc={box.desc} bg={box.bg} target={ box.num ? "" : "_blank"} width="48%" padding="16px 20px" href={ box.num ? `tel:${user.brand_tel === null ?"":user.brand_tel}` : user.homepage} ta>
            <TextArea>
              <p>{box.title}</p>
              <span>{box.desc}</span>
            </TextArea>
              <ImgArea>
                <img src={process.env.PUBLIC_URL + '/images/'+ box.img} alt="icon" />
              </ImgArea>
          </SolidBox>
        ))}
    </Wrapper>
  );
}

export default SolidBoxes;