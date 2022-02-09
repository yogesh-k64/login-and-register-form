import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./LoginForm.module.css";
import { userAction } from "../../store/store";
import { useNavigate } from "react-router-dom";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logginHandler = (event) => {
    event.preventDefault();
    //  error handling
    const errorHandler = () => {
      alert(`${name} is not registered as an user`);
    };
    //check if user is admin or not
    if (name.endsWith("@admin.com")) {
      console.log("user is admin");
      localStorage.setItem("user", "admin");
      dispatch(
        userAction.onLogin({ email: name, token: "sdhfskdfjshfkkjsdfh" })
      );
      navigate("/welcome");

    } else if (name.endsWith("@user.com")) {
      console.log("user is not admin");
      localStorage.setItem("user", "user");
      dispatch(
        userAction.onLogin({ email: name, token: "sdhfskdfjshfkkjsdfh" })
      );
      navigate("/welcome");

    } else {
      errorHandler();
      console.log(`name:${name}`, `password:${password}`);
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
      <p>
        note : user ends with '@user.com'
        <br></br> admin ends with '@admin.com'
      </p>
    </form>
  );
};

export default LoginForm;
