import React, {  } from "react";
import classes from "./LoginForm.module.css";
const LoginForm = (props) => {

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
      <button className={classes.button} type="submit" onClick={props.onLogged} >
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
