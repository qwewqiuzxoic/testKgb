import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

function LoginForm({ backLocation }) {
    const backlocation = backLocation;
    console.log(backlocation)
    let history = useHistory();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        localStorage.setItem('id',data.id);
        localStorage.setItem('password',data.password);
        history.push(backlocation);
    }

    
    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email",{required:true, pattern:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i})}/>
            {errors.email?.type === 'required' && <div>email을 입력해주세요</div>}
            {errors.email?.type === 'pattern' && <div>이메일 패턴</div>}
            <input {...register("password",{required:true, pattern:/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/})}/>
            {errors.password?.type === 'required' && <div>비밀번호를 입력해주세요</div>}
            {errors.password?.type === 'pattern' && <div>비밀번호 패턴</div>}
            <input type="submit"/>
        </form>
       
    </div>
  );
}

export default LoginForm;