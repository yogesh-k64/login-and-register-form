import React from "react";
import { useDispatch } from "react-redux";
import classes from "./LoginForm.module.css";
import { userAction } from "../store/store";
const LoginForm = (props) => {

  const dispatch = useDispatch();

  const logginHandler = (event) => {
    event.preventDefault();
    console.log('login');
    dispatch(userAction.onLogin())
  };
  return (
    <form>
      <h3 className={classes.heading}>Login</h3>
      <label className={classes.label} htmlFor="userName">
        Username
      </label>
      <input className={classes.input} type="text" id="userName"></input>
      <label className={classes.label} htmlFor="password">
        Password
      </label>
      <input className={classes.input} type="password" id="password"></input>
      <button className={classes.button} type="submit" onClick={logginHandler} >
        login
      </button>
      <p>
        don't have a acount?
        <strong onClick={props.onReg} className={classes.register}>
          Register here
        </strong>
      </p>
    </form>
  );
};

export default LoginForm;
