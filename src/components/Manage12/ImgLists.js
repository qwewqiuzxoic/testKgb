import React from 'react';
import styled from 'styled-components';
import { ChangeFont, FlexBox, LabelStyle  } from '../commonStyle';

const Wrapper = styled.div`
    margin-bottom:19px;
    overflow: hidden;
`;

const Name = styled.div`
    ${LabelStyle()};
    margin-top:8px;
`;
const Images = styled.div`
    ${FlexBox()};
    flex-wrap: nowrap;
    overflow-x: scroll;

    img{
        width:260px;
        height:auto;
        max-height: 180px;
        margin-right:10px;
    }
`;


function ImgLists({title}) {

    return (
        <Wrapper>
            <Name>{title}</Name>
            <Images>
                <img src={process.env.PUBLIC_URL + '/images/dummy.jpg'} alt="브랜드평가사진" />                
                <img src={process.env.PUBLIC_URL + '/images/dummy.jpg'} alt="브랜드평가사진" />                
                <img src={process.env.PUBLIC_URL + '/images/dummy.jpg'} alt="브랜드평가사진" />                
            </Images>
        </Wrapper>
    );
}

export default ImgLists;