import React from 'react';
import TopWrapper from '../components/home/TopWrapper';
import GradientBoxes from '../components/home/GradientBoxes';
import WhiteBoxes from '../components/home/WhiteBoxes';
import SolidBoxes from '../components/home/SolidBoxes';
import Board from '../components/home/Board';

import styled from 'styled-components';

const TopBg = styled.div`
    position:relative;
    top:0;
    left:0;
    right:0;
    background: ${(props) => props.theme.colors.primary};
    height:350px;
    border-radius: 0 0 30px 30px;
`;
const Wrapper = styled.div`
    position:relative;
    margin: 0 auto;
    background: #F3F7FB;
`;

function Home() {
  return (
    <>
      <Wrapper>
        <TopBg/>
        <TopWrapper></TopWrapper>
        <GradientBoxes/>
        <WhiteBoxes/>
        <SolidBoxes/>
        <Board/>
      </Wrapper>
    </>
  );
}

export default Home;