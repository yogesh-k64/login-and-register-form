import React, { useEffect } from "react";
import classes from "./console.module.css";
import { FaHome, FaWallet } from "react-icons/fa";
import { BiPurchaseTag } from "react-icons/bi";
import { TiArrowBack } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { app, firebaseConfig } from "../../firebase/firebase";
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore"; 

const Console = () => {
  const navigate = useNavigate();
  const name = useSelector((state) => state.user.userName);

  const returnHandler = () => {
    navigate("/welcome");
  };
useEffect(()=>{
  
  const firebaseApp = initializeApp(firebaseConfig);
  // getAuth().listUsers.then(userList=>console.log(userList))

  // Initialize Cloud Firestore through Firebase


const db = getFirestore(firebaseApp);

const querySnapshot =  getDocs(collection(db, "users")).then(res=>{
console.log(res);
  // res.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });
})

},[])

  return (
    <div className={classes["main-container"]}>
      <div className={classes["top-nav"]}>
        <TiArrowBack className={classes.back} onClick={returnHandler} />

        <h5 className={classes.profile}>
          <CgProfile /> {name.endsWith('@admin.com')?'admin':'user'}
        </h5>
      </div>
      <div className={classes["container"]}>
        <div className={classes["side-bar"]}>
          <FaHome className={classes.icons} />
          <FaWallet className={classes.icons} />
          <BiPurchaseTag className={classes.icons} />
        </div>
      </div>
    </div>
  );
};

export default Console;
