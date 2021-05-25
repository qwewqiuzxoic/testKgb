import styled, { css } from 'styled-components';

export const FlexBox = (justify, direction) => css`
    display: flex;
    justify-content: ${justify ? justify : "space-between"};
    flex-direction: ${direction ? direction : "row"};
`