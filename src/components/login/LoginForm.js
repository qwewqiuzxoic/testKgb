import React, {useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {login} from '../../redux/thunkFn/login.thunk'
//style관련
import styled from 'styled-components';

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
                background:url(/images/checkbox_on.svg) no-repeat center;
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
            background:url(/images/checkbox_off.svg) no-repeat center;
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
        background: url(/images/ico_plus.png) no-repeat center;
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
    const onSubmit = data => {
        dispatch(login(data.id,data.password));
    }
    useEffect(() => {
        if(user.userid){
            console.log(123)
            history.push(backlocation);
        }
        return () => {
        }
    }, [user])

    return (
    <Wrapper>
        <LogoBox>
            <img src={process.env.PUBLIC_URL + '/images/logo.svg'}/>
        </LogoBox>
        <Subtitle>이사서비스매뉴얼을 알고<br/>실천은 성공의 지름길입니다</Subtitle>
        <FormBox onSubmit={handleSubmit(onSubmit)}>
            <input {...register("id",{required:true})} placeholder="아이디"/>
            {errors.email?.type === 'required' && <MsgError>email을 입력해주세요</MsgError>}
            <input {...register("password",{required:true})} placeholder="비밀번호"/>
            {errors.password?.type === 'required' && <MsgError>비밀번호를 입력해주세요</MsgError>}
            <BtnLogin type="submit" value="로그인" />
        </FormBox>
        <CheckboxContainer>
            <input type="checkbox" id="autoLogin"></input>
            <label htmlFor="autoLogin">자동로그인</label>
        </CheckboxContainer>
        <ContactBtnContainer>
            <ContactBtn>본사 담당자 연결</ContactBtn>
        </ContactBtnContainer>      

    </Wrapper>
  );
}

export default LoginForm;