import React, { useEffect, useState } from 'react';
import Head from '../components/commonStyle/Head';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';


import styled from 'styled-components';
import { totalMesAnThunk, totalMesThunk } from '../redux/thunkFn/total.thunk';
import { useDispatch, useSelector } from 'react-redux';
import ConfirmModal from '../components/base/ConfirmModal';
import { totalMesInit } from '../redux/actionFn/total';

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
const user = JSON.parse(localStorage.getItem('user'));       

function Board({match}) {
    const {result,message} =  useSelector(state => state.totalMesReducer);

    const [uploadImg, setUploadImg] = useState({
        file : '',
        previewURL : ''
      });
      const [img,setimg] = useState("");
    const handleFileOnChange = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
      

          const formData = new FormData();
      formData.append("biz_sn", user.biz_sn);
      formData.append("del_chk", "");
      formData.append("addFileSel",  event.target.files[0]);

 
      dispatch(totalMesThunk("team_photo_proc",formData, { "Content-Type": "multipart/form-data"}));
        reader.onloadend = () => {
            setUploadImg({
            file : file,
            previewURL : reader.result
          })
        }
        reader.readAsDataURL(file);
      }

      let profile_preview = <img className='profile_preview' src={img}></img>;
    if(uploadImg.file !== ''){
      profile_preview = <img className='profile_preview' src={uploadImg.previewURL}></img>
    }
    const {data} = useSelector(state=>state.totalAnMesReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(totalMesAnThunk("team_photo",{}));
        return () => {
            
        }
    }, [])
    // useEffect(() => {
    //     if(data !== undefined && Object.keys(data).includes('imgurl')){
    //         console.log(data.imgurl)
    //         setimg(data.imgurl)
    //     }
    //     return () => {
            
    //     }
    // }, [data])

    const confirmModal = () =>{
        dispatch(totalMesInit());
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
                    <form>
                    <label htmlFor="uploadFile">
                        <span>{uploadImg.file.name}</span>
                        <IconBox>
                            <img src={process.env.PUBLIC_URL + '/images/ico_upload.png'} alt="upload" />
                        </IconBox>
                    </label>
                    <input multiple accept="image/*" encType="multipart/form-data" id="uploadFile" type="file" style={{ display: 'none' }} onChange={handleFileOnChange} />
                    </form>
                </UploadArea>
            </ContentArea>
            <ConfirmModal open={result === undefined ? false : true}
                text={result ==="failed" || result ===undefined ? "실패하였습니다.": message}
                onsubmit={confirmModal}
            ></ConfirmModal> 
      </Wrapper>
      
  );
}

export default Board;