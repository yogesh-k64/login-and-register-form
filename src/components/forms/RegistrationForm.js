import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAdminAction } from "../../store/addAdmin";
import classes from "./RegistrationForm.module.css";

const RegistrationForm = (props) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const userRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const email = userRef.current.value;
    const password = passRef.current.value;
    const confirmPass = confirmPassRef.current.value;

    if (password !== confirmPass) {
      setIsLoading(false);
      return alert(
        "password should be same in both password and confirm password fields"
      );
    }
    if (password === confirmPass) {
      console.log(email, "matching pass");

      ///  send user data to base

      dispatch(
        addAdminAction.onCreateAdmin({ email: email, password: password })
      );
      setIsLoading(false);
      //check if access token in local storage if yes navigate to /welcome
      const token = localStorage.getItem("token");
      console.log(token);
      
        // BUG: if already existing user signedup also it gets navigated
        navigate("/welcome");
      
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h3 className={classes.heading}>Register</h3>
      <label className={classes.label} htmlFor="userName">
        Username
      </label>
      <input
        className={classes.input}
        type="text"
        id="userName"
        ref={userRef}
      ></input>
      <label className={classes.label} htmlFor="password">
        Password
      </label>
      <input
        className={classes.input}
        type="password"
        id="password"
        ref={passRef}
      ></input>
      <label className={classes["label-confirm"]} htmlFor="password">
        Confirm password
      </label>

      <input
        className={classes.input}
        type="password"
        id="passwordConfirm"
        ref={confirmPassRef}
      ></input>
      {!isLoading && (
        <button className={classes.button} type="submit">
          sign up
        </button>
      )}
      {isLoading && <p>please wait..</p>}
      <p>
        already have an acount?
        <strong className={classes.login} onClick={() => navigate("/")}>
          login here
        </strong>
      </p>
    </form>
  );
};

export default RegistrationForm;
