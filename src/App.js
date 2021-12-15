import React from "react";
import classes from "./App.module.css";
import LoggedInPage from "./components/loggedIn/LoggedInPage";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import botpic from "./media/Bot-img.jpg";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "./store/store";

function App() {

  const dispatch = useDispatch();
  const isLog = useSelector((state) => state.user.isLogged);
  const onLogin = useSelector((state) => state.user.onLogin);

  const onFormSwitchHandler = () => {
    dispatch(userAction.formSwitch());
  };


  return (
    <React.Fragment>
      {!isLog && (
        <div className={classes["main-container"]}>
          <div className={classes["bot-img"]}>
            <img src={botpic} alt="bot pic"></img>
          </div>
          <div className={classes["login-container"]}>
            {onLogin && <LoginForm onReg={onFormSwitchHandler}></LoginForm>}
            {!onLogin && <RegistrationForm onLog={onFormSwitchHandler} />}
          </div>
        </div>
      )}
      {isLog && <LoggedInPage />}
    </React.Fragment>
  );
}

export default App;
