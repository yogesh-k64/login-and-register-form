import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../store/store";
import classes from "./LoggedInPage.module.css";

const LoggedInPage = () => {

 const dispatch = useDispatch();
const name = useSelector(state=>state.user.userName);
const pass = useSelector(state=>state.user.password);

  const logoutHandler =()=>{
dispatch(userAction.onLogout());
localStorage.removeItem('isLogged');
}

  return (
    <div className={classes["main-cointainer"]}>
      <section className={classes.box}>
        <h1 className={classes.welcome}>welcome</h1>
        <h3 className={classes.message}>{`user name: ${name}`}</h3>
        <h3>{`user password: ${pass}`}</h3>
        <button className={classes.button} onClick={logoutHandler}>logout</button>
      </section>
    </div>
  );
};

export default LoggedInPage;
