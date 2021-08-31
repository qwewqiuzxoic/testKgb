import React from 'react';
import LoginForm from '../components/login/LoginForm'
function Login({location}) {
    const backLocation = location.state ? location.state.data.pathname: "/";
    const token = localStorage.getItem('token') || 'not token';       
    const android = window.Android;
  return (
    <div>
      로그인테스트1112312313
      {token}
      ////////
      ///////
      <br></br>
      {android.getFirebaseToken()}
      <LoginForm backLocation={backLocation}/>
    </div>
  );
}

export default Login;