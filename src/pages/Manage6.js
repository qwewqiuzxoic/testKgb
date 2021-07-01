import React from 'react';
import Head from '../components/commonStyle/Head';
import { FlexBox, Gutter} from '../components/commonStyle';

import styled from 'styled-components';

const Wrapper = styled.div`
    background:#FAFAFA;
    padding-bottom:60px;
    min-height:100vh;
`;

const ContentArea = styled.div`
    position:relative;
    ${Gutter()};
    margin-top:-40px;
`;
const Box = styled.div`
    background: ${(props) => props.theme.colors.white};
    border-radius: 4px;
    min-height: 296px;
    ${FlexBox('center')};
    align-items:center;
    img{
        width:92px;
        height:auto;
    }
`
function Manage6() {
   
  return (
      <Wrapper>
            <Head title="매뉴얼 학습" subtit="kgb의 매뉴얼학습입니다"/>
            <ContentArea>
                <Box>
                <img src={process.env.PUBLIC_URL + '/images/img_manual.png'} alt="매뉴얼학습"/>
                </Box>
            </ContentArea>
      </Wrapper>
      
  );
}

export default Manage6;