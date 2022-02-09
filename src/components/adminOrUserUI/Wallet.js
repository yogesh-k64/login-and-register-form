import React, { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";
import { investAction } from "../../store/investment";
import { useSelector } from "react-redux";
import classes from "./Wallet.module.css";
const Wallet = () => {
  const investRef = useRef();
  const name = useSelector((state) => state.user.userName);
  const transactions = useSelector((state) => state.invest.transaction);

  const dispatch = useDispatch();
  const investHandler = () => {
    if (investRef.current.value.trim().length !== 0) {
      dispatch(
        investAction.onAddMoney({
          name: name,
          amount: investRef.current.value,
          date: new Date().toLocaleString(),
        })
      );

      alert(`congrats your money was successfully invested `);
    } else {
      alert("Enter an amount before submitting");
    }
  };
  const userTransactions = transactions.filter(
    (transaction) => transaction.name === name
  );

  const userTotalInvestment = userTransactions
    .map((transaction) => transaction.amount)
    .reduce((prev, cur) => prev + +cur, 0);
  const userLastInvestment =
    userTransactions[userTransactions.length - 1].amount;

  return (
    <Fragment>
      <div className={classes.add}>
        <label className={classes.label} htmlFor="invest">
          Add amount
        </label>
        <input
          className={classes.input}
          type="number"
          ref={investRef}
          step={500}
          min={100}
          id="invest"
        />
        <button
          type="button"
          className={classes.button}
          onClick={investHandler}
        >
          invest
        </button>
      </div>
      <div className={classes.add}>
        <label className={classes.label} htmlFor="totalInvestment">
          Last investment
        </label>
        <h3 id="totalInvestment">{`₹ ${userLastInvestment}`}</h3>
      </div>
      <div className={classes.total}>
        <label className={classes.label} htmlFor="userTotal">
          Total investment
        </label>
        <h3 id="userTotal">{`₹ ${userTotalInvestment}`}</h3>
      </div>
    </Fragment>
  );
};

export default Wallet;
