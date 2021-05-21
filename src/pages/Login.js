import React from 'react';
import LoginForm from '../components/login/LoginForm'
function Login({login, user}) {
    console.log(user)
  return (
    <div>
      <LoginForm/>
    </div>
  );
}

export default Login;