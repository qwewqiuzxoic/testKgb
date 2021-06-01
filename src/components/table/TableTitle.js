import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top:25px;
`;
const Title = styled.div`
    position: relative;
    font-size :  13px;
    font-weight: bold;
    color : ${(props) => props.color ? props.color : props.theme.colors.black };
    &:after{
        position:absolute;
        content:'';
        width: 3px;
        height: 3px;
        border-radius:1.5px;
        background : ${(props) => props.theme.colors.primary };
    }
`;


function GroupTitle({title, color}) {
  return (
    <Wrapper>
        <Title color={color}>{title}</Title>
    </Wrapper>
  );
}

export default GroupTitle;