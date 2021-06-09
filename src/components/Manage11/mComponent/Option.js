import React from 'react';
import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../../commonStyle';
const Wrapper = styled.div`
`;
const Box = styled.label`
  display: block;
  background: #F2F6F8;
  color: #ACB6BC;
  font-size:  ${(props) => props.theme.fontSizes.xs};
  padding: 14px 15px;
  margin-bottom: 8px;
  border-radius: 4px;
`;
const Radio = styled.input`
  display:none;
  &:checked + label{
    background: #fff;
    color: #404345;
    border:1px solid #009B90;
  }
`;
function Option({option, updateData,qIndex, check}) {
  return (
    <Wrapper>
      {option.map((props,index)=>
      <>
      <Radio type="radio" defaultChecked={index === check? true:false} id={`a${qIndex}_${index}`} name={`option${qIndex}`} onChange={()=>updateData(qIndex,index)} key={index}/>
      <Box htmlFor={`a${qIndex}_${index}`} name={`option${qIndex}`} >
              {props}
      </Box>
      </>
      )}
    </Wrapper>
  );
}

export default Option;