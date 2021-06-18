import React from 'react';
import styled , { keyframes }from 'styled-components';

const spin = keyframes`
  to { -webkit-transform: rotate(360deg); }
`
const Wrapper = styled.div`
      position:absolute;
      top:50%;
      left:50%;
      margin-left:-25px;
      display: inline-block;
      width: 50px;
      height: 50px;
      border: 3px solid ${(props) => props.theme.colors.primary};
      border-radius: 50%;
      border-top-color: #fff;
      animation: ${spin} .5s ease-in-out infinite;
      -webkit-animation: ${spin} .5s ease-in-out infinite;
`;

const Loading = () => {
    return (
        <Wrapper>
        </Wrapper>
    );
  };

export default Loading;