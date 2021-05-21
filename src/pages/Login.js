import React from 'react';
import LoginForm from '../components/login/LoginForm'
function Login({location}) {
    const backLocation = location.state ? location.state.data.pathname: "/";
  return (
    <div>
      <LoginForm backLocation={backLocation}/>
    </div>
  );
}

export default Login;