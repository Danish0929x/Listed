import React from "react";
import google from "../../assets/images/google.svg";
import apple from "../../assets/images/apple.svg";

function Login() {
  return (
    <div className="login">
      <div className="login-left">
        <h1>Board.</h1>
      </div>
      <div className="login-right">
        <div className="lr-main">
          <h2>Sign In</h2>
          <p>Sign in to your account</p>
          <div className="lrm-top">
            <div className="lrm-top-item">
              <img src={google} />
              <p>Sign in with Google</p>
            </div>
            <div className="lrm-top-item">
              <img src={apple} />
              <p>Sign in with Apple</p>
            </div>
          </div>
          <div className="lrm-main">
            <div className="form-group">
              <label>Email address</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" />
            </div>
            <a>Forgot password?</a> <br />
            <button>Sign In</button>
          </div>
          <p className="bottom">Don't have an account? <a>Register here</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
