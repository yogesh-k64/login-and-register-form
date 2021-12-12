import React, { useState } from "react";
import classes from "./App.module.css";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import botpic from "./media/Bot-img.jpg";
function App() {
  const [showReg, setShowReg] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const onRegHandler = () => {
    setShowReg((prev) => !prev);
    setShowLogin((prev) => !prev);
  };
  return (
    <React.Fragment>
      <div className={classes["main-container"]}>
        <div className={classes['bot-img']}>
        <img src={botpic} alt="bot pic"></img>
        </div>
        <div className={classes["login-container"]}>
          {showLogin && <LoginForm onReg={onRegHandler}></LoginForm>}
          {showReg && <RegistrationForm onLog={onRegHandler} />}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
