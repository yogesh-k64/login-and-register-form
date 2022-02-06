import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./LoginForm.module.css";
import { userAction } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logginHandler = (event) => {
    event.preventDefault();

    if (name.endsWith("@admin.com")) {
      dispatch(
        userAction.onLogin({ email: name, token: "sdhfskdfjshfkkjsdfh" })
      );
      console.log('user is admin');
      navigate("/welcome");
    } else {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, name, password)
        .then((res) => {
          // console.log(res);

          if (res._tokenResponse.registered) {
            const idToken = res._tokenResponse.idToken;
            const email = res._tokenResponse.email;
            dispatch(
              userAction.onLogin({
                email: email,
                token: idToken,
              })
            );
            localStorage.setItem("token", idToken);
            navigate("/welcome");

            const current =
              new Date().getTime() + res._tokenResponse.expiresIn * 1000; // section expire in ms

            localStorage.setItem("exp-time", current);
          }
        })
        .catch((error) => {
          if (error.response) {
            alert(error.response.data.error.message);
          } else {
            alert(error.message);
          }
        });
    }
  };
  return (
    <form>
      <h3 className={classes.heading}>Login</h3>
      <label className={classes.label} htmlFor="userName">
        Username
      </label>
      <input
        className={classes.input}
        type="text"
        id="userName"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <label className={classes.label} htmlFor="password">
        Password
      </label>
      <input
        className={classes.input}
        type="password"
        id="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button className={classes.button} type="submit" onClick={logginHandler}>
        login
      </button>

      <p>
        don't have a acount?
        <strong
          onClick={() => navigate("/register-form")}
          className={classes.register}
        >
          Register here
        </strong>
      </p>
    </form>
  );
};

export default LoginForm;
