import styled, { css } from 'styled-components';

export const Gutter = (padding) => css`
    padding: ${padding ? padding : "0 12px"};
`