import styled, { css } from 'styled-components';
import { ChangeFont } from './ChangeFont';

export const LabelStyle = () => css`
  display:inline-block;
  font-size: ${(props) => props.theme.fontSizes.s};
  color:  ${(props) => props.theme.colors.grey2};
  margin-bottom:5px;
  font-weight:bold;
`