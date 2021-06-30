import axios from 'axios';
import React, { useState,useRef, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { totalMesAnThunk } from '../../redux/thunkFn/total.thunk';
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
const user = JSON.parse(localStorage.getItem('user'));       
const renderPhotos = (source,type) => {
  return source[type] && source[type].map((photo) => {
    return (
    <Preview>
        <img src={photo} alt="" key={photo} />
    </Preview>
    );
  });
};
function AddImg({title, setName, type, selectedFiles, setSelectedFiles}) {
    const dispatch = useDispatch(); //
    const handleImageChange = (e) => {
      // console.log(e.target.files[])
      if (e.target.files.length > 3) {
        alert('최대 3장의 사진까지 업로드할 수 있습니다.')
      } else{
        const filesArray = Array.from(e.target.files).map((file) =>
          URL.createObjectURL(file)
        );
        // dispatch(totalMesAnThunk("file_save",{addFileSel:e.target.files[0]},{ "Content-Type": "multipart/form-data"}))
        selectedFiles[type].length >= 3? alert('최대 3장의 사진까지 업로드할 수 있습니다.') :
        setSelectedFiles({...selectedFiles,[type]:selectedFiles[type].concat(filesArray)});
        Array.from(e.target.files).map(
          (file) => URL.revokeObjectURL(file) 
        );          
      }
      const formData = new FormData();
      formData.append("addFileSel",  e.target.files[0]);
      formData.append("tableName", "BRAND_PHOTO");
      formData.append("tableSn", user.biz_sn);
      formData.append("codeFile", "브랜드평가사진");
 
      dispatch(totalMesAnThunk("file_save",formData, { "Content-Type": "multipart/form-data"}));
      console.log(title)
      setName(type);
    }
    
    const onsubmit=(e)=>{
      e.preventDefault();
      
    }
  
    
    return (
        <Wrapper>
            <Name>{title}</Name>
            <Layout>
            <Label htmlFor={`uploadImg_${type}`}>
                <IconBox>
                    <img src={process.env.PUBLIC_URL + '/images/btn_addImg.png'} alt="upload" />
                </IconBox>
                <ImgLength>
                <span>{selectedFiles[type]?.length}</span>/3
                </ImgLength>
            </Label>
            <form  onSubmit={onsubmit}>
            <input multiple accept="image/*" encType="multipart/form-data" id={`uploadImg_${type}`} type="file" style={{ display: 'none' }} onChange={handleImageChange}/>
            </form>
            {renderPhotos(selectedFiles,type)}
            </Layout>
        </Wrapper>
    );
}
export default AddImg;