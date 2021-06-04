import React, { useState } from 'react';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';

import styled from 'styled-components';

const Wrapper = styled.div`
.donutchart-track{
  fill: transparent;
  stroke-width: 26;
}
.donutchart-indicator {
  position:relative;
  fill: transparent;
  stroke: #ffffff;
  stroke-width: 26;
  stroke-dasharray: 0 10000;
  transition: stroke-dasharray .3s ease;
  :after{
    position:absolute;
    content:'';
    top:0;
    left:0;
    width:3px;
    height:3px;
    background:red;

  }
}

.donutchart {
  margin: 0 auto;
  border-radius: 50%;
  display: block;
}

.donutchart-text{
  ${ChangeFont(true)};
  font-size:14px;
  fill:#ffffff;
}
.donutchart-text-val{

}
.donutchart-text-percent{

}
`;

function Graph(props) {
    const halfsize = (props.size * 0.5);
    const radius = halfsize - (props.strokewidth * 0.5);
    const circumference = 2 * Math.PI * radius;
    const strokeval = ((props.value * circumference) / 100);
    const dashval = (strokeval + ' ' + circumference);

    const trackstyle = {strokeWidth: props.strokewidth};
    const indicatorstyle = {strokeWidth: props.strokewidth, strokeDasharray: dashval}
    const rotateval = 'rotate(-90 '+halfsize+','+halfsize+') scale(1,-1) translate(0, '+-props.size+')';
   
  return (
      <Wrapper>
        <svg width={props.size} height={props.size} className="donutchart">
            <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} className="donutchart-track"/>
            <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} className="donutchart-indicator"/>
            <text className="donutchart-text" x={halfsize} y={halfsize+4} style={{textAnchor:'middle'}} >
            <tspan className="donutchart-text-val">{props.value}</tspan>
            <tspan className="donutchart-text-percent">점</tspan>
            </text>
        </svg>
      </Wrapper>
  );
}

export default Graph;