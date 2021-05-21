import React from 'react';
import { useForm } from "react-hook-form";

function LoginForm() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email",{required:true,pattern:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i})}/>
            {errors.email?.type === 'required' && "email을 입력해주세요"}
            <input {...register("password",{required:true,pattern:/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/})}/>
            {errors.email?.type === 'required' && "비밀번호를 입력해주세요"}
            <input type="submit"/>
        </form>
   
          
    </div>
  );
}

export default LoginForm;