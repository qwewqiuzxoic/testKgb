import styled, { css } from 'styled-components';

export const ChangeFont = (num, weight) => css`
        font-family: ${num ? 'Montserrat' : 'SCDream'};
        font-weight: ${weight};
`