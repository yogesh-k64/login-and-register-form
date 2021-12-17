import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./LoginForm.module.css";
import { userAction } from "../store/store";
const LoginForm = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const storedIsLogged = localStorage.getItem("isLogged");

  useEffect(() => {
    if (storedIsLogged !=null) {
      const user=JSON.parse(storedIsLogged)
      dispatch(userAction.onLogin(user));
    }
  }, [storedIsLogged,dispatch]);

  const logginHandler = (event) => {
    event.preventDefault();
    dispatch(
      userAction.onLogin({
        name,
        password,
      })
    );
    localStorage.setItem("isLogged", JSON.stringify({name,password}));
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
        <strong onClick={props.onReg} className={classes.register}>
          Register here
        </strong>
      </p>
    </form>
  );
};

export default LoginForm;