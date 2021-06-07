import React from 'react';
import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../../commonStyle';

const Wrapper = styled.div`
  margin: 12px 0 16px;
  span{
    ${ChangeFont(false, 600)};
    color: ${(props) => props.theme.colors.primary};
    margin-right:4px;
  }
`;

function Question({question}) {
  return (
    <Wrapper>
      <span>Q.</span>{question}
    </Wrapper>
  );
}

export default Question;