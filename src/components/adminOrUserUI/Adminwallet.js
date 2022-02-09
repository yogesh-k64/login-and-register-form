import React from "react";
import { useSelector } from "react-redux";
import classes from "./Wallet.module.css";
const Adminwallet = () => {
  const investedAmount = useSelector((state) => state.invest.totalAmount);
  const transactions = useSelector((state) => state.invest.transaction);
  return (
    <div>
      <h3>{`Total investment by user : ₹ ${investedAmount}`}</h3>
      <h3>Transaction history:</h3>
      <table className={classes.table}>
        <tr>
          <th className={classes.th}>Name</th>
          <th className={classes.th}>Amount</th>
          <th className={classes.th}>Date</th>
        </tr>

        {transactions.map((transaction) => (
          <tr className={classes.li}>
            <td className={classes.td}>{transaction.name}</td>

            <td className={classes.td}> {transaction.amount} </td>

            <td className={classes.td}> {transaction.date} </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Adminwallet;
