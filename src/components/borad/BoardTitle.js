import React, { useState } from 'react';
import H1 from '../commonStyle/H1'
import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';
import { useDispatch, useSelector } from 'react-redux';
import { pageMemoNumChange } from '../../redux/actionFn/pageMemo';
import { compose } from 'redux';


const Wrapper = styled.div`
    background: ${(props) => props.theme.colors.bg};
`;
const TopBg = styled.div`
    position:relative;
    top:0;
    left:0;
    right:0;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 0 0 0 30px;
    padding-bottom: 56px;

`;
const Tabs = styled.div`
    ${Gutter()};
    ${FlexBox('left')};
    margin-top:12px;
`;
const TabName = styled.div`
    width:48%;
    ${ChangeFont(true)};
    color : rgba(255, 255, 255, .7);
    padding: 12px 18px;
    border-radius: 20px;
    text-align: center;
    cursor:pointer;
    &.selected{
      background : rgba(255, 255, 255, .3);
      color: #FFFFFF;
      font-weight: bold;
      cursor: auto;
  }
`;

function BoardTitle({title, subtit, check, boardSubName, changeTeamNm, tab,boardTeamNm, tabCheck, tabName, changeTab}) {
  const dispatch = useDispatch();
  const tabD = useSelector(state=>state.pageMemoReducer.pageNum);

  
  return (
    <Wrapper>
      <TopBg>
        <H1 title={title} subtit={subtit}></H1>
        {tabCheck ? 
        <Tabs>
          <TabName className={tabD===1 ? "selected":""} onClick={()=>dispatch(pageMemoNumChange(1))}>{tabName[0]}</TabName>
          <TabName className={tabD===2 ? "selected":""} onClick={()=>dispatch(pageMemoNumChange(2))}>{tabName[1]}</TabName>
        </Tabs>
        :
        null
        }
        
      </TopBg>
    </Wrapper>
  );
}

export default BoardTitle;