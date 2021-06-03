import React, { useState } from 'react';
import Head from '../components/commonStyle/Head';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';


import styled from 'styled-components';

const Wrapper = styled.div`
    background: #FAFAFA;
`;
const ContentArea = styled.div`
    position:relative;
    ${Gutter()};
    margin-top:-60px;
`;
const ImgBox = styled.div`
    background: ${(props) => props.theme.colors.white};
    border-radius: 4px 4px 0 0;
    padding:20px 15px 30px 15px;
    min-height: 500px;
`;
const UploadArea = styled.div`
    ${FlexBox()};
    border-top: 1px solid #DFE5EA;
    border-bottom: 1px solid #DFE5EA;
    label{
        ${FlexBox()};
        width: calc(100% - 80px);
        background: #fff;
        span{
            color:#ACB6BC;
            line-height: 40px;
            padding:0 10px;
        }
    }
`;
const IconBox = styled.div`
    ${FlexBox('center')};
    align-items: center;
    width:40px;
    height:40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    img{
            width: 12px;
            height: auto;
        }
`;
const LeftTitle = styled.div`
    width:80px;
    height:40px;
    line-height: 40px;
    background: #FAFAFA;
    text-align: center;
`;
function Board({match}) {
    const [uploadImg, setUploadImg] = useState({
        file : '',
        previewURL : ''
      });
    const handleFileOnChange = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        console.log(reader, file)
        reader.onloadend = () => {
            setUploadImg({
            file : file,
            previewURL : reader.result
          })
        }
        reader.readAsDataURL(file);
      }

      let profile_preview = null;
    if(uploadImg.file !== ''){
      profile_preview = <img className='profile_preview' src={uploadImg.previewURL}></img>
    }
  return (
      <Wrapper>
            <Head title="팀 단체사진" subtit="KGB의 우리팀톡톡입니다" pb="90px"/>
            <ContentArea>
                <ImgBox>
                {profile_preview}         
                </ImgBox>
                <UploadArea>
                    <LeftTitle>첨부파일</LeftTitle>
                    <label htmlFor="uploadFile">
                        <span>{uploadImg.file.name}</span>
                        <IconBox>
                            <img src={process.env.PUBLIC_URL + '/images/ico_upload.png'} alt="upload" />
                        </IconBox>
                    </label>
                    <input accept="image/*" id="uploadFile" type="file" style={{ display: 'none' }} onChange={handleFileOnChange} />
                </UploadArea>
            </ContentArea>
            
      </Wrapper>
      
  );
}

export default Board;