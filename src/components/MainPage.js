import React from "react";
import LoggedInPage from "./loggedIn/LoggedInPage";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import botpic from "../media/Bot-img.jpg";
import { useSelector } from "react-redux";
import classes from "./MainPage.module.css";
import { Route, Routes } from "react-router-dom";

function MainPage() {
  const isLog = useSelector((state) => state.user.isLogged);

  return (
    <React.Fragment>
      {!isLog && (
        <div className={classes["main-container"]}>
          <div className={classes["bot-img"]}>
            <img src={botpic} alt="bot pic"></img>
          </div>
          <div className={classes["login-container"]}>
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/register-form" element={<RegistrationForm />} />
            </Routes>
          </div>
        </div>
      )}
      {isLog && <LoggedInPage />}
    </React.Fragment>
  );
}

export default MainPage;
