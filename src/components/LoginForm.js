import React, { useState } from "react";
import { useDispatch} from "react-redux";
import classes from "./LoginForm.module.css";
import { userAction } from "../store/store";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const token= useSelector(state=>state.user.idToken);

  const logginHandler = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDbmI8V0_hNdfszsXS8y0DjzeAebGB5VOw",
        { email: name, password: password, returnSecureToken: true }
      )
      .then((res) => {
        if(res.data.registered){

          const idToken = res.data.idToken;
          const email=res.data.email;
          dispatch(
            userAction.onLogin({
              email:email,
              token:idToken
            })
            );
            localStorage.setItem('token',idToken);
            navigate("/welcome");
          }
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.error.message);
        } else {
          console.log(error.message);
        }
      });
  };
// console.log(token);
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
