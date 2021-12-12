import React, { useState } from "react";
import classes from "./App.module.css";
import LoggedInPage from "./components/loggedIn/LoggedInPage";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import botpic from "./media/Bot-img.jpg";
function App() {
  const [showReg, setShowReg] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  const onRegHandler = () => {
    setShowReg((prev) => !prev);
    setShowLogin((prev) => !prev);
  };

  const logginHandler = (event) => {
    event.preventDefault();
    setIsLogged(true);
  };
  return (
    <React.Fragment>
      {!isLogged && (
        <div className={classes["main-container"]}>
          <div className={classes["bot-img"]}>
            <img src={botpic} alt="bot pic"></img>
          </div>
          <div className={classes["login-container"]}>
            {showLogin && (
              <LoginForm
                onReg={onRegHandler}
                onLogged={logginHandler}
              ></LoginForm>
            )}
            {showReg && <RegistrationForm onLog={onRegHandler} />}
          </div>
        </div>
      )}
      {isLogged && <LoggedInPage />}
    </React.Fragment>
  );
}

export default App;
