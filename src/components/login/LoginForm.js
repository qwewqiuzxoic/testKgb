import React, {useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {login} from '../../redux/thunkFn/login.thunk'
import ContactModal from '../../components/login/ContactModal'
//style관련
import styled from 'styled-components';
import Loading from '../commonStyle/Loading';
import ConfirmModal from '../base/ConfirmModal';
import { totalMesInit } from '../../redux/actionFn/total';
const Wrapper = styled.div`
    margin: 0 auto;
    padding: 0 24px;
    `;

const LogoBox = styled.div`
  margin: 70px auto 27px auto;
  max-width: 116px;
`;
const Subtitle = styled.div`
  font-family: "SCDream",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  font-weight:300;
  text-align: center;
  letter-spacing: -0.78px;
  font-size:13px;
`;
const FormBox = styled.form`
    max-width: 250px;
    margin:45px auto 0 auto;
    input {
        width:100%;
        height:38px;
        margin-bottom:9px;
        line-height:38px;
        border-bottom: 1px solid #DFE5EA;
        font-size:${(props) => props.theme.fontSizes.m};
    }
`
const BtnLogin = styled.input`
    height:45px;
    line-height: 45px;
    border: none;
    background: ${(props) => props.theme.colors.primary};
    border-radius:27.5px;
    color: ${(props) => props.theme.colors.white};
    font-size:13px;
    margin-top:6px;
`
const MsgError = styled.div`
    font-size:${(props) => props.theme.fontSizes.xxs};
    margin-top:-7px;
    color:${(props) => props.theme.colors.red}; 
`
const CheckboxContainer = styled.div`
    max-width: 250px;
    margin:0 auto;
    input{
        display:none;
        &:checked + label{
            &:after{
                content:'';
                background: url(${(props) => process.env.PUBLIC_URL + '/images/checkbox_on.png'}) no-repeat center;
                background-size: 15px;
                width:15px;
                height:15px;
            }
        }
    }
    label{
        position:relative;
        display:block;
        cursor:pointer;
        padding-left:19px;
        &:after{
            position:absolute;
            top:0;
            left:0;
            content:'';
            width:15px;
            height:15px;
            background:url(${(props) => process.env.PUBLIC_URL + '/images/checkbox_off.png'}) no-repeat center;
            background-size: 15px;
        }
        img{
            width:100%;
            height:auto;
        }
    }
`

const ContactBtnContainer = styled.div`
    max-width: 250px;
    margin:50px auto;
`
const ContactBtn = styled.a`
    position:relative;
    display: block;
    background: #F3F7FB;
    border-radius: 10px;
    height:50px;
    line-height: 50px;
    text-align: center;
    font-family: "SCDream";
    font-weight: 500;
    cursor: pointer;
    &:after{
        position:absolute;
        bottom:-15px;
        left:0;
        right:0;
        margin:0 auto;
        content:'';
        background: url(${(props) => process.env.PUBLIC_URL + 'images/ico_plus.png'}) no-repeat center;
        background-size: 25px;
        width: 25px;
        height: 25px;
    }
`


function LoginForm({ backLocation }) {
    const backlocation = backLocation;
    let history = useHistory();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const user = useSelector(state=>state.loginReducer.user);
    const loading = useSelector(state=>state.loginReducer.loading);
    const token = localStorage.getItem('token') || 'not token';       
    const uuid = localStorage.getItem('UUID') || 'not UUID';     
    const onSubmit = data => {
        dispatch(login(data.id, data.password,window.TOKEN,window.UUID)); //안드로이드 토큰 관련 추가
    }
    
    const [sucCheck,setSucCheck] = useState(false);
    useEffect(() => {
        if(Object.keys(user).length !== 0 && user.userid !== ""){
            history.push(backlocation);
        }else if(user.userid === ""){
            setSucCheck(true);
        }
        return () => {
        }
    }, [user])

    const [ modalOpen, setModalOpen ] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    const confirmModal = () =>{
        dispatch(totalMesInit());
        setSucCheck(false);
    }
      

    return (
    <Wrapper>
        {window.UUID}
        <LogoBox>
            <img src={process.env.PUBLIC_URL + '/images/logo.svg'}/>
        </LogoBox>
        <Subtitle>이사서비스매뉴얼을 알고<br/>실천은 성공의 지름길입니다</Subtitle>
        <FormBox onSubmit={handleSubmit(onSubmit)}>
            <input {...register("id",{required:true})} placeholder="아이디"/>
            {errors.email?.type === 'required' && <MsgError>email을 입력해주세요</MsgError>}
            <input type="password" {...register("password",{required:true})} placeholder="비밀번호"/>
            {errors.password?.type === 'required' && <MsgError>비밀번호를 입력해주세요</MsgError>}
            <BtnLogin type="submit" value="로그인" />
        </FormBox>
        {token}
        {loading && <Loading></Loading>}
        {<ConfirmModal open={sucCheck} text="로그인정보가 없습니다." onsubmit={confirmModal}></ConfirmModal>}
        <CheckboxContainer>
            <input type="checkbox" id="autoLogin"></input>
            <label htmlFor="autoLogin">자동로그인</label>
        </CheckboxContainer>
        <ContactBtnContainer>
            <ContactBtn onClick={openModal}>본사 담당자 연결</ContactBtn>
        </ContactBtnContainer>      
        <ContactModal open={ modalOpen } close={ closeModal } header="담당자 리스트"></ContactModal>
    </Wrapper>
  );
}

export default LoginForm;