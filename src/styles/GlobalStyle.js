import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import NotoSansRegular from "./fonts/NotoSansCJKkr-Regular.otf";
import NotoSansRegularWoff from "./fonts/NotoSansCJKkr-Regular.woff";
import NotoSansLight from "./fonts/NotoSansCJKkr-Light.otf";
import NotoSansLightWoff from "./fonts/NotoSansCJKkr-Light.woff";
import NotoSansBold from "./fonts/NotoSansCJKkr-Bold.otf";
import NotoSansBoldWoff from "./fonts/NotoSansCJKkr-Bold.woff";

import MontserratMedium from "./fonts/Montserrat-Medium.ttf";
import MontserratMediumWoff from "./fonts/Montserrat-Medium.woff";
import MontserratLight from "./fonts/Montserrat-Light.ttf";
import MontserratLightWoff from "./fonts/Montserrat-Light.woff";
import MontserratBold from "./fonts/Montserrat-SemiBold.ttf";
import MontserratBoldWoff from "./fonts/Montserrat-SemiBold.woff";

import SCDream4 from "./fonts/SCDream4.otf";
import SCDream4Woff from "./fonts/SCDream4.woff";
import SCDream5 from "./fonts/SCDream5.otf";
import SCDream5Woff from "./fonts/SCDream5.woff";
import SCDream6 from "./fonts/SCDream6.otf";
import SCDream6Woff from "./fonts/SCDream6.woff";
import SCDream7 from "./fonts/SCDream7.otf";
import SCDream7Woff from "./fonts/SCDream7.woff";

const GlobalStyles = createGlobalStyle`
     ${reset};

     @font-face {
      font-family: 'Noto sans';
      src: url(${NotoSansRegular}) format('otf'),
           url(${NotoSansRegularWoff}) format('woff');
      font-weight: 300;
      }
      @font-face {
      font-family: 'Noto sans';
      src: url(${NotoSansLight}) format('otf'),
           url(${NotoSansLightWoff}) format('woff');
      font-weight: 200;
      }
      @font-face {
      font-family: 'Noto sans';
      src: url(${NotoSansBold}) format('otf'),
           url(${NotoSansBoldWoff}) format('woff');
      font-weight: 400;
      }

      @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratMedium}) format('ttf'),
           url(${MontserratMediumWoff}) format('woff');
      font-weight: 300;
      }
      @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratLight}) format('ttf'),
           url(${MontserratLightWoff}) format('woff');
      font-weight: 200;
      }
      @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratBold}) format('ttf'),
           url(${MontserratBoldWoff}) format('woff');
      font-weight: 400;
      }

      @font-face {
      font-family: 'SCDream';
      src: url(${SCDream4}) format('otf'),
           url(${SCDream4Woff}) format('woff');
      font-weight: 400;
      }
      @font-face {
      font-family: 'SCDream';
      src: url(${SCDream5}) format('otf'),
           url(${SCDream5Woff}) format('woff');
      font-weight: 500;
      }
      @font-face {
      font-family: 'SCDream';
      src: url(${SCDream6}) format('otf'),
           url(${SCDream6Woff}) format('woff');
      font-weight: 600;
      }
      @font-face {
      font-family: 'SCDream';
      src: url(${SCDream7}) format('otf'),
           url(${SCDream7Woff}) format('woff');
      font-weight: 700;
      }


     * {
        box-sizing: border-box;
      }
      body{
        background-color: #ffffff;
        font-family: "Noto sans",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        line-height:1.4;
        color:${({theme}) => theme.colors.black};
        font-weight:300;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      input, button {
        background-color: transparent;
        border: none;
        outline: none;
      }
      h1, h2, h3, h4, h5, h6, button, a{
        font-family:"Noto sans", sans-serif;
      }
      ol, ul, li {
        list-style: none;
      }
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
`;

export default GlobalStyles;