import React, { useEffect } from 'react';
import AddImg from './AddImg';
import styled from 'styled-components';
import GroupTitle from '../commonStyle/GroupTitle';
import Button from '../commonStyle/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { totalMesThunk } from '../../redux/thunkFn/total.thunk';
import ConfirmModal from '../../components/base/ConfirmModal';
import { totalMesInit } from '../../redux/actionFn/total';


const Wrapper = styled.div`
`;
const BtnWrap = styled.div`
`;
const list = [
  {title:"차량", type:"car"},
  {title:"포장자재", type:"box"},
  {title:"유니폼", type:"cloth"}
]
function AddImgWrap({setChange3}) {
  const state =  useSelector(state => state.totalAnMesReducer.data);
  const {result,message} =  useSelector(state => state.totalMesReducer);
  const [selectedFiles, setSelectedFiles] = useState({
      car:[],
      box:[],
      cloth:[]
    }
  );
  const dispatch = useDispatch();

  const [name,setName] = useState("");
  const [carImg,setCarImg]=useState([]);
  const [boxImg,setBoxImg]=useState([]);
  const [clothImg,setClothImg]=useState([]);

  const setCarImgFn = (sn)=>{
    if(carImg.includes(sn)){
      return;
    }else {
      setCarImg(carImg.concat(sn));
    }
  }
  const setBoxImgFn = (sn)=>{
    if(boxImg.includes(sn)){
      return;
    }else {
      setBoxImg(boxImg.concat(sn));
    }
  }
  const setClothImgFn = (sn)=>{
    if(clothImg.includes(sn)){
      return;
    }else {
      setClothImg(clothImg.concat(sn));
    }
  }
  const subMit = ()=>{
    console.log(carImg,boxImg,clothImg)
    if(clothImg[0] !== undefined || carImg[0] !== undefined || boxImg[0] !== undefined){
      dispatch(totalMesThunk("brand_photo_proc",{
        img_car01:carImg[0] === undefined? "" : carImg[0],
        img_car02:carImg[1] === undefined? "" : carImg[1],
        img_car03:carImg[2] === undefined? "" : carImg[2],
        img_box01:boxImg[0] === undefined? "" : boxImg[0],
        img_box02:boxImg[1] === undefined? "" : boxImg[1],
        img_box03:boxImg[2] === undefined? "" : boxImg[2],
        img_cloth01:clothImg[0] === undefined? "" : clothImg[0],
        img_cloth02:clothImg[1] === undefined? "" : clothImg[1],
        img_cloth03:clothImg[2] === undefined? "" : clothImg[2],
        sn:""
      }))
    }
  }
  useEffect(()=>{
    console.log(name)
  },[name])
  useEffect(() => {
    if(state){
      if(Object.keys(state).length !== 0){
        if( name==="car" ){
          setCarImgFn(state.img_sn);
        } else if( name==="box" ){
          setBoxImgFn(state.img_sn);
        } else if( name === "cloth" ){
          setClothImgFn(state.img_sn);
        }
      }
    }
    
    return () => {
      
    }
  }, [state])
  const confirmModal = () =>{
    dispatch(totalMesInit());
    setChange3();
}

  return (
    <Wrapper>
        <GroupTitle title="사진 첨부하기"/>
        {list.map((item,index)=>
            <AddImg key={index} title={item.title} setName={setName} type={item.type} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles}/>
        )}
        <BtnWrap>
            <Button onclick={subMit} bg="#3397B9" color='#fff' text='사진 등록하기' h='40px' fs='12px' mgt='20px'/>
            </BtnWrap>
            <ConfirmModal open={result === undefined ? false : true}
                text={result ==="failed" || result ===undefined ? "실패하였습니다.": message}
                onsubmit={confirmModal}
            ></ConfirmModal> 
    </Wrapper>
  );
}

export default AddImgWrap;