import React, { useEffect } from 'react';
import AddImg from './AddImg';
import styled from 'styled-components';
import GroupTitle from '../commonStyle/GroupTitle';
import Button from '../commonStyle/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const Wrapper = styled.div`
`;
const BtnWrap = styled.div`
`;
const list = [
  {title:"차량", type:"car"},
  {title:"포장자재", type:"box"},
  {title:"유니폼", type:"cloth"}
]
function AddImgWrap() {
  const state =  useSelector(state => state.totalAnMesReducer.data);
  const [selectedFiles, setSelectedFiles] = useState({
      car:[],
      box:[],
      cloth:[]
    }
  );

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
  return (
    <Wrapper>
        <GroupTitle title="사진 첨부하기"/>
        {list.map((item,index)=>
            <AddImg key={index} title={item.title} setName={setName} type={item.type} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles}/>
        )}
        <BtnWrap>
            <Button onclick={subMit} bg="#3397B9" color='#fff' text='사진 등록하기' h='40px' fs='12px' mgt='20px'/>
            </BtnWrap>
    </Wrapper>
  );
}

export default AddImgWrap;