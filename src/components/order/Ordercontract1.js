import React from 'react';
import RadioGroup from '../commonStyle/RadioGroup';
import styled from 'styled-components';
import { FlexBox, ChangeFont, InputStyle, LabelStyle} from '../commonStyle';
import CheckGroup from '../commonStyle/CheckGroup';

const Wrapper = styled.div`
margin-top:10px;
`;
const Layout = styled.div`
  ${FlexBox()};
    margin-top:0px;
    margin-bottom:4px;
    &>div{
      width:50%;
    }
`;
const Label = styled.label`
  ${LabelStyle()};
`;

function Ordercontract1({CboOrderStatus}) {
  return (
  <Wrapper> 
      <Label htmlFor="contractOption">
      계약여부
      </Label>
      <Layout>
          <RadioGroup id="contract1" name="contract" label="지명 견적증"></RadioGroup>
          <RadioGroup id="contract2" name="contract" label="지명 미계약"></RadioGroup>
        </Layout>
        <Layout>
          <RadioGroup id="contract3" name="contract" label="지명 계약중"></RadioGroup>
          <RadioGroup id="contract4" name="contract" label="오더토스"></RadioGroup>
        </Layout>
  </Wrapper>
  );
}

export default Ordercontract1;