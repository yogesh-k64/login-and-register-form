import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./RegistrationForm.module.css";

const RegistrationForm = (props) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const userRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const user = userRef.current.value;
    const pass = passRef.current.value;
    const confirmPass = confirmPassRef.current.value;

    const data = {
      email: user,
      password: pass,
      returnSecureToken: true,
    };

    if (pass !== confirmPass) {
      setIsLoading(false);
      return console.log("not equal");
    }
    if (pass === confirmPass) {
      console.log(user, "matching pass");
      ///  send user data to base
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDbmI8V0_hNdfszsXS8y0DjzeAebGB5VOw",
          data
        )
        .then((res) => {
          setIsLoading(false);

          // console.log(res);
          const response = res.data.idToken;
          if (!!response) {
            alert("your acount was created successfully login to begin");
            navigate("/login");
          }
        })
        .catch((error) => {
          setIsLoading(false);

          if (error.response) {
            alert(error.response.data.error.message);
          } else {
            alert("Error", error.message);
          }
        });
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
