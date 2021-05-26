import React from 'react';
import styled from 'styled-components';
import { ChangeFont, Gutter } from './';

const Wrapper = styled.div`
  ${Gutter()};
  padding-top:15px;
`;
const Title = styled.div`
  ${ChangeFont(false, 600)};
  font-size :  ${(props) => props.theme.fontSizes.title};
  color:  ${(props) => props.theme.colors.white};
`;
const SubTit = styled.div`
`;

function H1({title, subtit}) {
  return (
    <Wrapper>
        <Title>{title}</Title>
        <SubTit>{subtit}</SubTit>
    </Wrapper>
  );
}

export default H1;