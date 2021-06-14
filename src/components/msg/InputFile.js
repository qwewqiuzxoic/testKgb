import React, { useState } from 'react';
import Button from '../commonStyle/Button';
import styled from 'styled-components';
import { LabelStyle, ChangeFont, FlexBox } from '../commonStyle';

const Wrapper = styled.div`
  margin-top:10px;
`;
const Title = styled.div`
  ${LabelStyle()}
`;
const Layout = styled.div`
  ${FlexBox()}
`;
const FakeInput = styled.label`
  width:100%;
  height:40px;
  padding:0 15px;
  line-height:40px;
  text-align: ${(props) => props.textAlign ? props.textAlign : 'left'};
  background:${(props) => props.value ? '#F3F7FB' : '#FFFFFF'};
  border: ${(props) => props.value ? '0 none' : `1px solid ${props.theme.colors.grey1}`};
  border-radius: 4px;
  margin-right: 4px;
  ${ChangeFont(true, 200)};
  &:focus, &:active, &.active{
    background: #F3F7FB;
    border:none;
  }
  ::placeholder {
    color: #CED5DB;
    }
  ${LabelStyle()}
`;
const Label = styled.label`
    width: ${(props) => props.w ? props.w : '100%'};
    height: ${(props) => props.h ? props.h : '39px'};
    line-height: ${(props) => props.height ? props.height : '39px'};;
    font-size : ${(props) => props.fontSize ? props.fontSize : props.theme.fontSizes.s};
    font-weight: bold;
    text-align: center;
    background: ${(props) => props.bg};
    color: ${(props) => props.color};
    border: ${(props) => props.bd ? `1px solid ${props.bd}`: 'none'};
    border-radius: 4px;
    margin-top: ${(props) => props.mgt ? props.mgt : ''};
    cursor:pointer;
`;

function InputFile({id, title}) {
    const [uploadFile, setUploadFile] = useState({
        file : '',
        previewURL : ''
      });
    const handleFileOnChange = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        console.log(reader, file)
        reader.onloadend = () => {
          setUploadFile({
            file : file,
            previewURL : reader.result
          })
        }
        reader.readAsDataURL(file);
      }

  return (
      <Wrapper>
        <Title>{ title }</Title>
        <Layout>
          <FakeInput htmlFor={id} >{uploadFile.file.name}</FakeInput>
          <Label htmlFor={id} bg='#ACB6BC' color='#ffffff' w='97px' h='40px' fs='12px'>파일찾기</Label>
        </Layout>
        <input id={id} type="file" onChange={handleFileOnChange} style={{ display: 'none' }} />
      </Wrapper>
      
  );
}

export default InputFile;