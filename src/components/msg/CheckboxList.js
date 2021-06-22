import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../commonStyle';

import CheckGroup from '../commonStyle/CheckGroup';
import Checkbox from './Checkbox';

const Header = styled.div`
  ${FlexBox()}
  margin-bottom: 10px;
`;
const Delete = styled.div`
    padding:4px 0;
    cursor:pointer;
`;
const Box = styled.div`
    background: #FFFFFF;
    box-shadow: 4px 4px 10px #33333314;
    margin-bottom:10px;
    border-radius: 4px;
    ${Gutter('20px 10px')};
    cursor:pointer;
    ${FlexBox()};

`;
const Message = styled.div`
    width:100%;
    margin-left:4px;
`;
const MsgInfo = styled.div`
    ${FlexBox()};
    margin-bottom:4px;
`;
const Writer = styled.div`
  font-weight:bold;
`;
const Date = styled.div`
  ${ChangeFont(true,200)};
  font-size: ${(props) => props.theme.fontSizes.s};
  color:#ACB6BC;
`;
const MsgText = styled.div`
  color:#ACB6BC;
`;
const CheckboxList = ({list,delSubmit,allCheckedHandler,checkedItemHandler,isAllChecked,checkedItems,bChecked,setChecked}) => {
 


   
    
    const checkHandler = ({ target }) => {
        setChecked(!bChecked);
        allCheckedHandler(target.checked);
    };
    
    
    return (
      <>
        <Header>
            <CheckGroup id='checkAll' name='checkAll' label='전체선택' onChange={(e) => checkHandler(e)} checked={bChecked}/>
            <Delete onClick={()=>delSubmit(checkedItems)}>선택삭제</Delete>
        </Header>
          {list.map((issue, index) => (
            <Box>
                <Checkbox isAllChecked={isAllChecked} key={index} issue={issue} index={index} checkedItemHandler={checkedItemHandler}
                />
                <Message>
                    {issue.title}
                    <MsgInfo>
                        <Writer>{issue.send_date}</Writer>
                        <Date>{issue.rcv_date}</Date>
                    </MsgInfo>
                    <MsgText>
                        {issue.content}
                    </MsgText>
                </Message>
            </Box>
          ))}
      </>
    );
  };

export default CheckboxList;
