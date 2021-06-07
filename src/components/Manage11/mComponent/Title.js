import React from 'react';
import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../../commonStyle';

const Wrapper = styled.div`
  padding-bottom:12px;
  border-bottom: 1px solid #DFE5EA;
`;
const Tit = styled.div`
    ${ChangeFont(false)};   
    font-size:  ${(props) => props.theme.fontSizes.l};
    font-weight: bold;
`;
const SubTit = styled.div`
    font-size:  ${(props) => props.theme.fontSizes.s};
    color:#ACB6BC;
`;

function Title({title, subTitle}) {
  return (
    <Wrapper>
      <Tit>
          {title}
      </Tit>
      <SubTit>
          {subTitle}
      </SubTit>
    </Wrapper>
  );
}

export default Title;