import styled, { css } from 'styled-components';
import { ChangeFont } from './ChangeFont';

export const InputStyle = (textAlign) => css`
  width:100%;
  height:40px;
  padding:0 15px;
  text-align: ${ textAlign ? textAlign : 'left'};
  background: #FFFFFF;
  border: 1px solid  ${(props) => props.theme.colors.grey1};
  border-radius: 4px;
  color: #3397B9;
  ${ChangeFont(true, 200)};
  &:focus, &:active, &.active{
    background: #F3F7FB;
    border:none;
  } 
  &::placeholder {
    color: #CED5DB;
    font-weight:200;
  }
`