import React from "react";
import LoginForm from "./forms/LoginForm";
import RegistrationForm from "./forms/RegistrationForm";
import botpic from "../media/Bot-img.jpg";
import classes from "./MainPage.module.css";
import { Route, Routes } from "react-router-dom";

function MainPage() {

  return (
    <React.Fragment>
      <div className={classes["main-container"]}>
        <div className={classes["bot-img"]}>
          <img src={botpic} alt="bot pic"></img>
        </div>
        <div className={classes["login-container"]}>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register-form" element={<RegistrationForm />} />
          </Routes>
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default MainPage;
