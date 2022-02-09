import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./Home.module.css";
const Home = () => {
  const name = useSelector((state) => state.user.userName);
  const investedAmount = useSelector((state) => state.invest.totalAmount);
  const transactions = useSelector((state) => state.invest.transaction);

  const user = localStorage.getItem("user");

  const payDetails = transactions.filter(
    (transaction) => transaction.name === name
  );

  return (
    <Fragment>
      <h2 className={classes.name}>{`Name : ${name}`}</h2>
      {user === "admin" ? (
        <h3>{`User invested ₹ ${investedAmount}`}</h3>
      ) : (
        <h3>Role : user</h3>
      )}
      {user === "user" ? (
        <Fragment>
          <h3>Transaction history:</h3>
          {payDetails.length !== 0 ? (
            <Fragment>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>Name</th>
                    <th className={classes.th}>Amount</th>
                    <th className={classes.th}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {payDetails.map((transaction) => (
                    <tr className={classes.li}>
                      <td className={classes.td}>{transaction.name}</td>

                      <td className={classes.td}> {transaction.amount}</td>

                      <td className={classes.td}> {transaction.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Fragment>
          ) : (
            <p>No transactions yet</p>
          )}
        </Fragment>
      ) : (
        <h3>Role : admin</h3>
      )}
    </Fragment>
  );
};

export default Home;
