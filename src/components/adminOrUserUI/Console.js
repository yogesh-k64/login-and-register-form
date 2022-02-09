import React, { useState, useEffect } from "react";
import classes from "./console.module.css";
import { FaHome, FaWallet } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Wallet from "./Wallet";
import Home from "./Home";
import Adminwallet from "./Adminwallet";

const Console = () => {
  const navigate = useNavigate();
  const name = useSelector((state) => state.user.userName);
  const [user, setUser] = useState(name);
  const [consolePage, setConsolePage] = useState("home");
  const userRole = localStorage.getItem("user");
  const returnHandler = () => {
    navigate("/welcome");
  };
  useEffect(() => {
    if (name) {
      const user = name.split("@");
      setUser(user[0]);
    }
  }, [name]);
  const walletNavigation = () => {
    setConsolePage("wallet");
  };
  const homeNavigation = () => {
    setConsolePage("home");
  };
  return (
    <div className={classes["main-container"]}>
      <div className={classes["top-nav"]}>
        <TiArrowBack className={classes.back} onClick={returnHandler} />
        <div className={classes.profile}>
          <CgProfile className={classes["profile-icon"]} />
          <h5 className={classes["profile-name"]}>{user}</h5>
        </div>
      </div>
      <div className={classes["container"]}>
        <div className={classes["side-bar"]}>
          <FaHome
            className={`${classes.icons} ${
              consolePage === "home" ? classes.active : ""
            }`}
            onClick={homeNavigation}
          />
          <FaWallet
            className={`${classes.icons} ${
              consolePage === "wallet" ? classes.active : ""
            }`}
            onClick={walletNavigation}
          />
        </div>
        <div className={classes.wallet}>
          {consolePage === "home" ? (
            <Home />
          ) : userRole === "admin" ? (
            <Adminwallet />
          ) : (
            <Wallet />
          )}
        </div>
      </div>
    </div>
  );
};

export default Console;
