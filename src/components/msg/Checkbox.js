import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CheckGroup from '../commonStyle/CheckGroup';

const Wrapper = styled.div`

`;

const Checkbox = ({ isAllChecked, issue, checkedItemHandler }) => {
    const [bChecked, setChecked] = useState(false);

    const checkHandler = ({ target }) => {
        setChecked(!bChecked);
        checkedItemHandler(issue.id, target.checked);
      };
    
      const allCheckHandler = () => setChecked(isAllChecked);
    
      useEffect(() => allCheckHandler(), [isAllChecked]);

    return (
      <Wrapper>
        <CheckGroup id={issue.id} name={issue.id} onChange={(e) => checkHandler(e)} checked={bChecked}/>          
        {/* <input type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)} /> */}
      </Wrapper>
    );
  };

export default Checkbox;
