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
    width:50px;
    height:1px;
    background: ${(props) => props.lineColor};
  }
`;
const TitName = styled.p`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  padding-bottom:4px;
`;
const RightText = styled.span`
  color: ${(props) => props.rightColor ? props.rightColor : props.theme.colors.white};
  opacity: .7;
  ${ChangeFont(true)}
`;

function LineTitArea({name, rightText, lineColor, bgColor, color, weight, rightColor}) {
  return (
    <Wrapper bgColor={bgColor} lineColor={lineColor}>
      <TitName color={color} weight={weight}>{name}</TitName>
      <RightText rightColor={rightColor}>{rightText}</RightText>
    </Wrapper>
  );
}

export default LineTitArea;