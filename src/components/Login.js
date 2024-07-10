// components/Login.js
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="container text-center mt-5">
      <h2>Please log in to continue</h2>
      <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
}

export default Login;
