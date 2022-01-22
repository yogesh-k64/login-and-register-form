import React, { Fragment } from "react";
import classes from "./state.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
const State = (props) => {
  
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.start}>
            <button onClick={props.delete} className={classes.x} >x</button>
        </div>
        <AiOutlineArrowRight className={classes.arrow} />
        <button className={classes.button} onClick={props.createNode}>1</button>
      </div>
    </Fragment>
  );
};

export default State;
