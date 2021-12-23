import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./RegistrationForm.module.css";

const RegistrationForm = (props) => { 
const navigate= useNavigate();
  return (
    <form>
      <h3 className={classes.heading} >Register</h3>
      <label className={classes.label} htmlFor="userName">
        Username
      </label>
      <input className={classes.input} type="text" id="userName"></input>
      <label className={classes.label} htmlFor="password">
        Password
      </label>
      <input className={classes.input} type="password" id="password"></input>
      <label className={classes['label-confirm']} htmlFor="password">
        Confirm password
      </label>

      <input
        className={classes.input}
        type="password"
        id="passwordConfirm"
      ></input>
      <button className={classes.button} type="submit">sign up</button>
      <p>
        already have an acount?{" "}
        <strong className={classes.login} onClick={()=>navigate('/')}>
          login here
        </strong>
      </p>
    </form>
  );
};

export default RegistrationForm;
