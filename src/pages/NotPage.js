import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '../components/commonStyle';

const Wrapper = styled.div`
        position:relative;
`;
const Box = styled.div`
        position:absolute;
        width:100%;
        height:100%;
        min-height: 296px;
        background: ${(props) => props.theme.colors.white};
        border-radius: 4px;
        margin-bottom:8px;
        padding:10px 18px;
        box-shadow: 4px 4px 5px #33333314;
        align-items:center;
        top:0;
        left:0;
        right:0;
        z-index:1;
        ${FlexBox('center')};
        flex-direction: column;
        img{
            width:62px;
            height:auto;
        }
`;

const NotPage = () => {
    return (
        <Wrapper>
            <Box>
                <img src={process.env.PUBLIC_URL + '/images/nopost.png'} alt="No Posts"/>
                <div>현재 준비중입니다.</div>
            </Box>
        </Wrapper>
    );
  };

export default NotPage;