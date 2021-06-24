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
function OrderAddressOption({title,name ,EL, Floor, Loop, Sadari, Step, gondora,Trdist}) {
  return (
    <Wrapper>
      <Group>
      <Label htmlFor="info_from">
        {title}
      </Label>
      <Input id={`name_${name}`} type="text" placeholder="이송거리(m)" textAlign="right" value={Trdist}/>
      <Layout>
        <Input type="text" placeholder="층수" textAlign="right" value={Floor}/>
        <Input type="text" placeholder="계단(층)" textAlign="right" value={Step}/>
      </Layout>
      </Group>
      <Group>
      <Label htmlFor="info_from">
      작업정보 옵션
      </Label>
      <Layout>
        <RadioGroup id="workOption1" name={name} label="사다리차 이용" checked={Sadari === "1"?true:false}></RadioGroup>
        <RadioGroup id="workOption2" name={name}  label="엘리베이터" checked={EL === "1"?true:false}></RadioGroup>
      </Layout>
      <Layout>
        <RadioGroup id="workOption3" name={name}  label="곤도라 사용" checked={gondora === "1"?true:false}></RadioGroup>
        <RadioGroup id="workOption4" name={name}  label="로프 사용" checked={Loop === "1"?true:false}></RadioGroup>
      </Layout>
      </Group>
    </Wrapper>
  );
}

export default OrderAddressOption;