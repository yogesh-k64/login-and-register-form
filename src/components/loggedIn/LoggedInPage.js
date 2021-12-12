import React from "react";
import classes from "./LoggedInPage.module.css";

const LoggedInPage = () => {
  return (
    <div className={classes["main-cointainer"]}>
      <section className={classes.box}>
        <h1 className={classes.welcome}>welcome</h1>
        <h3 className={classes.message}>user name:</h3>
        <h3>user pass:</h3>
      </section>
    </div>
  );
};

export default LoggedInPage;
