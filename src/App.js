import React, { useState } from "react";
import classes from "./App.module.css";
import LoggedInPage from "./components/loggedIn/LoggedInPage";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import botpic from "./media/Bot-img.jpg";
import { useSelector } from "react-redux";

function App() {
  const [showReg, setShowReg] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  // const [isLogged, setIsLogged] = useState(false);

  const isLog = useSelector(state => state.user.isLogged);

  const onRegHandler = () => {
    setShowReg((prev) => !prev);
    setShowLogin((prev) => !prev);
  };
console.log(isLog)
  return (
    <React.Fragment>
      {!isLog && (
        <div className={classes["main-container"]}>
          <div className={classes["bot-img"]}>
            <img src={botpic} alt="bot pic"></img>
          </div>
          <div className={classes["login-container"]}>
            {showLogin && (
              <LoginForm
                onReg={onRegHandler}
                // onLogged={logginHandler}
              ></LoginForm>
            )}
            {showReg && <RegistrationForm onLog={onRegHandler} />}
          </div>
        </div>
      )}
      {isLog && <LoggedInPage />}
    </React.Fragment>
  );
}

export default App;
