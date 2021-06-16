import React from 'react';
import styled from 'styled-components';
import { FlexBox,  ChangeFont } from '../commonStyle';

const Wrapper = styled.div`
    ${FlexBox()};
    align-items: center;
    margin-bottom:4px;
`;
const Dt = styled.div`
    font-weight: bold;
`;
const Dd = styled.div`
    ${ChangeFont(true, 200)};
    color:  ${(props) => props.color ? props.color : '#82898E'};
    font-size:  ${(props) => props.fs ? props.fs : '12px'};
    font-weight:  ${(props) => props.fw ? props.fw : '200'};
`;

const Checkbox = ({ dt , dd, ddSize, ddColor, ddWeight }) => {

    return (
        <Wrapper>
            <Dt>{dt}</Dt>
            <Dd color={ddColor} fs={ddSize} fw={ddWeight}>{dd}</Dd>
        </Wrapper>
    );
  };

export default Checkbox;
