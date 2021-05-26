import React from 'react';
import styled from 'styled-components';
import { FlexBox, ChangeFont } from '../commonStyle';

const Wrapper = styled.div`
  position: relative;
  font-size: ${(props) => props.theme.fontSizes.s};
  padding-bottom: 8px;
  border-bottom: 1px solid  ${(props) => props.bgColor};

  ${FlexBox()};
  &:after{
    position:absolute;
    bottom:-1px;
    left:0;
    content:'';
    width:70px;
    height:1px;
    background: ${(props) => props.lineColor};
  }
`;
const TitName = styled.p`
  color: ${(props) => props.color};
  padding-bottom:4px;
  ${ChangeFont(false, 700)}
  font-size: ${(props) => props.theme.fontSizes.xl};
`;
const RightText = styled.span`
  color: ${(props) => props.rightColor ? props.rightColor : props.theme.colors.white};
  ${ChangeFont(false, 400)}
  font-size: ${(props) => props.theme.fontSizes.xxs};
  line-height:20px;
  cursor:pointer;
`;

function BoardTitArea({name, rightText, lineColor, bgColor, color, weight, rightColor}) {
  return (
    <Wrapper bgColor={bgColor} lineColor={lineColor}>
      <TitName color={color} weight={weight}>{name}</TitName>
      <RightText rightColor={rightColor}>{rightText}</RightText>
    </Wrapper>
  );
}

export default BoardTitArea;