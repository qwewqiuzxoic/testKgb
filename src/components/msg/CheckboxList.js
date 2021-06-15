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
const CheckboxList = () => {
    const issues = [
        {id:'msg1', from:'길동1', to:'홍길동1', date:'2021.01.01', text:'쪽지내용'},
        {id:'msg2', from:'길동2', to:'홍길동2', date:'2021.01.01', text:'쪽지내용쪽지내용'},
        {id:'msg3', from:'길동3', to:'홍길동3', date:'2021.01.01', text:'쪽지내용쪽지내용쪽지내용'},
        {id:'msg4', from:'길동4', to:'홍길동4', date:'2021.01.01', text:'쪽지내용쪽지내용쪽지내용쪽지내용쪽지내용'},
    ];
    const [checkedItems, setCheckedItems] = useState(new Set());//check된 Checkbox의 id값이 들어감
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [bChecked, setChecked] = useState(false)

    const checkedItemHandler = (id, isChecked) => {
        if (isChecked) {
          checkedItems.add(id);
          setCheckedItems(checkedItems);
        } else if (!isChecked && checkedItems.has(id)) {
          checkedItems.delete(id);
          setCheckedItems(checkedItems);
        }
      };
    
    const allCheckedHandler = (isChecked) => {
        if (isChecked) {
          setCheckedItems(new Set(issues.map(({ id }) => id)));
          setIsAllChecked(true);
        } else {
          checkedItems.clear();
          setCheckedItems(setCheckedItems);
          setIsAllChecked(false);
        }
      };
    
    const checkHandler = ({ target }) => {
        setChecked(!bChecked);
        allCheckedHandler(target.checked);
    };

    return (
      <>
        <Header>
            <CheckGroup id='checkAll' name='checkAll' label='전체선택' onChange={(e) => checkHandler(e)} checked={bChecked}/>
            <Delete>선택삭제</Delete>
        </Header>
          {issues.map((issue, index) => (
            <Box>
                <Checkbox isAllChecked={isAllChecked} key={issue.id} issue={issue} checkedItemHandler={checkedItemHandler}
                />
                <Message>
                    <MsgInfo>
                        <Writer>{issue.to}</Writer>
                        <Date>{issue.date}</Date>
                    </MsgInfo>
                    <MsgText>
                        {issue.text}
                    </MsgText>
                </Message>
            </Box>
          ))}
      </>
    );
  };

export default CheckboxList;
