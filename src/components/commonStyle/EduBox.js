import React from 'react';
import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';

const Wrapper = styled.div`
    background: ${(props) => props.theme.colors.white};
    border-radius: 4px;
    padding:10px 18px;
    margin-bottom:8px;
    box-shadow: 4px 4px 5px #33333314;
    align-items:center;
    ${FlexBox()};
    cursor:pointer;
`;
const Layout = styled.div`

`;
const Title = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom:3px;
`;
const Date = styled.div`
    ${ChangeFont(true)};
    font-size: ${(props) => props.theme.fontSizes.s};
    color:#ACB6BC;
`;

const PropsArea = styled.div`
    ${FlexBox()};
`;

function EduBox(props) {
   
  return (
    <Wrapper>
      <Layout>
        <Title>{props.title}</Title>
        <Date>{props.date}</Date>
      </Layout>
      <PropsArea>
        {props.children}
      </PropsArea>
    </Wrapper>
  );
}

export default EduBox;