import React, { useState } from 'react';
import styled from 'styled-components';
import { ChangeFont, FlexBox, LabelStyle  } from '../commonStyle';

const Wrapper = styled.div`
    margin-bottom:19px;
`;

const Name = styled.div`
  ${LabelStyle()};
  margin-top:8px;
`;
const Layout = styled.div`
    ${FlexBox('left')};

`;
const Label = styled.label`
    ${FlexBox('center')};
    flex-direction: column;
    align-items:center;
    width:24%;
    height:68px;
    border:1.5px solid #009B90;
    cursor:pointer;
`
const IconBox = styled.div`
    width:22px;
    margin-bottom:6px;
`;
const ImgLength = styled.div`
    ${ChangeFont(true)};
    text-align: center;
    span{
        color:#009B90;
    }
`;
const Preview = styled.div`
    width:24%;
    height:68px;
    overflow: hidden;
    margin-left:1.3%;
    img{
    }
`;

function AddImg({title}) {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleImageChange = (e) => {
      // console.log(e.target.files[])
      if (e.target.files.length > 3) {
        alert('최대 3장의 사진까지 업로드할 수 있습니다.')
      } else{
        const filesArray = Array.from(e.target.files).map((file) =>
          URL.createObjectURL(file)
        );
        console.log(selectedFiles);
        selectedFiles.length >= 3? alert('최대 3장의 사진까지 업로드할 수 있습니다.') :
        setSelectedFiles((prevImages) => prevImages.concat(filesArray));
        Array.from(e.target.files).map(
          (file) => URL.revokeObjectURL(file) 
        );          
      }
    };
  
    const renderPhotos = (source) => {
      return source.map((photo) => {
        return (
        <Preview>
            <img src={photo} alt="" key={photo} />
        </Preview>
        );
      });
    };

    return (
        <Wrapper>
            <Name>{title}</Name>
            <Layout>
            <Label htmlFor="uploadImg">
                <IconBox>
                    <img src={process.env.PUBLIC_URL + '/images/btn_addImg.png'} alt="upload" />
                </IconBox>
                <ImgLength>
                <span>{selectedFiles.length}</span>/3
                </ImgLength>
            </Label>
            <input multiple accept="image/*" id="uploadImg" type="file" style={{ display: 'none' }} onChange={handleImageChange}/>
            {renderPhotos(selectedFiles)}
            </Layout>
        </Wrapper>
    );
}

export default AddImg;