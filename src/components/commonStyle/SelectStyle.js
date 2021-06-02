import styled, { css } from 'styled-components';
import { ChangeFont } from './ChangeFont';
import { InputStyle } from './InputStyle';

export const SelectStyle = () => css`
  ${InputStyle()};
  padding:0 12px;
  color: #CED5DB;
  ${ChangeFont(true, 200)};
  &:focus, &:active, &.active{
    color :${(props) => props.theme.colors.black};
  }
`