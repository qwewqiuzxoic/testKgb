import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CheckGroup from '../commonStyle/CheckGroup';

const Wrapper = styled.div`

`;

const Checkbox = ({ isAllChecked, issue, checkedItemHandler, isCircle, index }) => {
    const [bChecked, setChecked] = useState(false);

    const checkHandler = ({ target }) => {
      console.log(issue);
        setChecked(!bChecked);
        checkedItemHandler(issue.msg_sn, target.checked);
      };
    
      const allCheckHandler = () => setChecked(isAllChecked);
    
      useEffect(() => allCheckHandler(), [isAllChecked]);

    return (
      <Wrapper>
        <CheckGroup id={`msg_${index}`} name={`msg_${index}`} onChange={(e) => checkHandler(e)} checked={bChecked} isCircle={isCircle}/>          
        {/* <input type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)} /> */}
      </Wrapper>
    );
  };

export default Checkbox;
