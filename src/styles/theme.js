const fontSizes = {
    xxs: '9px',
    xs: '10px',
    s: '11px',
    m: '12px',
    ml : '13px',
    l: '14px',
    xl: '16px',
    xxl: '19px',
    title: '21px',
  };
  
  const colors = {
      boldBlack : "#333333",
      black: "#404345",
      white: "#FFFFFF",
      yellow: "#FFC034",
      orange: "#EE883E",
      red: "#FF4D55",
      green:"#28F173",
      blue: "#43C9F0",
      primary: "#009B90",
      secondary: "#2F8DB7",
      grey1:"#DFE5EA",
      grey2:"#ACB6BC", 
      grey3:"#CED5DB",
      bg:"#F3F7FB"
  };
    
  const deviceSizes = {
      XL: "600",
      L: "480",
      M: "376",
      S: "320"
  };
  
  const device = {
    XL: `only screen and (max-width: ${deviceSizes.XL}px)`,
    L: `only screen and (max-width: ${deviceSizes.L}px)`,
    M: `only screen and (max-width: ${deviceSizes.M}px)`,
    S: `only screen and (max-width: ${deviceSizes.S}px)`,
  };
  
  const theme = {
    fontSizes,
    colors,
    deviceSizes,
    device,
  };
  
  export default theme;