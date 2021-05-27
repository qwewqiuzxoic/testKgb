import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top:25px;
`;
const Title = styled.div`
  font-size :  13px;
  font-weight: bold;
`;

function GroupTitle({title}) {
  return (
    <Wrapper>
        <Title>{title}</Title>
    </Wrapper>
  );
}

export default GroupTitle;