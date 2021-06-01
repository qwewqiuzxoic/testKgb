import React from 'react';
import H1 from '../commonStyle/H1'
import styled from 'styled-components';

const Wrapper = styled.div`
    background: ${(props) => props.theme.colors.bg};
`;
const TopBg = styled.div`
    position:relative;
    top:0;
    left:0;
    right:0;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 0 0 0 30px;
    padding-bottom: ${(props) => props.pb? props.pb : '56px'};

`;

function Head({title, subtit, pb}) {
  return (
    <Wrapper>
      <TopBg pb={pb}>
        <H1 title={title} subtit={subtit}></H1>
      </TopBg>
    </Wrapper>
  );
}

export default Head;