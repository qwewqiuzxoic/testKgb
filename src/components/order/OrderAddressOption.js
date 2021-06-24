import React from 'react';
import styled from 'styled-components';
import { FlexBox, InputStyle, LabelStyle} from '../commonStyle';
import RadioGroup from '../commonStyle/RadioGroup';

const Wrapper = styled.div`
`;
const Layout = styled.div`
  ${FlexBox()};
  margin-top:5px;
  input:first-child{
    margin-right:10px;
  }
  &>div{
    width:50%;
    margin-top:0px;
    margin-bottom:4px;

  }
`;
const Group = styled.div`
  margin-top:10px;
`;
const Label = styled.label`
  ${LabelStyle()};
`;
const Input = styled.input`
  ${InputStyle()};
`;
function OrderAddressOption({title}) {
  return (
    <Wrapper>
      <Group>
      <Label htmlFor="info_from">
        {title}
      </Label>
      <Input id="info_from" type="text" placeholder="이송거리(m)" textAlign="right"/>
      <Layout>
        <Input type="text" placeholder="층수" textAlign="right"/>
        <Input type="text" placeholder="계단(층)" textAlign="right"/>
      </Layout>
      </Group>
      <Group>
      <Label htmlFor="info_from">
      작업정보 옵션
      </Label>
      <Layout>
        <RadioGroup id="workOption1" name="workOption" label="사다리차 이용"></RadioGroup>
        <RadioGroup id="workOption2" name="workOption" label="엘리베이터"></RadioGroup>
      </Layout>
      <Layout>
        <RadioGroup id="workOption3" name="workOption" label="곤도라 사용"></RadioGroup>
        <RadioGroup id="workOption4" name="workOption" label="로프 사용"></RadioGroup>
      </Layout>
      </Group>
    </Wrapper>
  );
}

export default OrderAddressOption;