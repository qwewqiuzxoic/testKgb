import React from 'react';
import styled from 'styled-components';
import { FlexBox, ChangeFont, InputStyle, LabelStyle} from '../commonStyle';
import CheckGroup from '../commonStyle/CheckGroup';

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
function OrderAddressOption() {
  return (
    <Wrapper>
      <Group>
      <Label htmlFor="info_from">
        출발지 주소
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
          <CheckGroup id="menu1" name="menu1" label="사다리차 이용"></CheckGroup>
          <CheckGroup id="menu2" name="menu2" label="엘리베이터"></CheckGroup>
        </Layout>
        <Layout>
          <CheckGroup id="menu3" name="menu3" label="곤도라 사용"></CheckGroup>
          <CheckGroup id="menu4" name="menu4" label="로프 사용"></CheckGroup>
        </Layout>
      </Group>
    </Wrapper>
  );
}

export default OrderAddressOption;