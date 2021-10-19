import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider, signInWithPopup } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({ type: actionTypes.SET_USER, user: result.user });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          alt=""
        />
        <img
          src="https://img2.gratispng.com/20180319/uzq/kisspng-facebook-social-media-social-network-advertising-p-facebook-text-logo-transparent-5ab0367797c427.6522980015214977196216.jpg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
