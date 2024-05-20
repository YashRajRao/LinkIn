import React, { useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import LinkedinLogo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";
import illu from '../assets/banner.png'

export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In to Linkedin!");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Please Check your Credentials");
    }
  };

  return (
    <>
      <div className="login-wrapper">
        <img src={LinkedinLogo} className="linkedinLogo" />
        <div className="heading_text">
          Welcome to your <br />
          professional community
        </div>
        <div className="login-wrapper-inner">
          <h1 className="heading">Sign In</h1>
          <div className="auth_container">
            <div className="auth-inputs">
              <label className="label" for="Email">
                Email or Phone
              </label>
              <input
                id="Email"
                onChange={(event) =>
                  setCredentials({ ...credentails, email: event.target.value })
                }
                type="email"
                className="common-input"
                placeholder="Email or Phone"
              />
              <label className="label" for="Password">
                Password
              </label>
              <input
              id="Password"
                onChange={(event) =>
                  setCredentials({ ...credentails, password: event.target.value })
                }
                type="password"
                className="common-input"
                placeholder="Password"
              />
              <button onClick={login} className="login-btn">
                Sign in
              </button>
              <hr className="hr-text"/>
              <div className="google-btn-container">
                <p className="go-to-signup">
                  New to LinkedIn?{" "}
                  <span className="join-now" onClick={() => navigate("/register")}>
                    Join now
                  </span>
                </p>
              </div>
            </div>
          </div>
          <img src={illu} alt="" className="illu" />
        </div>
      </div>
    </>
  );
}
