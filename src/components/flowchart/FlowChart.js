import React, { Fragment } from "react";
import classes from './FlowChart.module.css'
const FlowChart = () => {
  const data = [
    { name: "yogesh", id: 12 },
    { name: "raghul", id: 13 },
  ];

  return (
    <Fragment>
      <div draggable="true" onDrag={(e) => console.log(e.dataTransfer)} >
        {data.map(item=><p key={item.id}  >{item.name}</p>)}
      </div>
      <div className={classes['drop-zone']} ></div>
    </Fragment>
  );
};

export default FlowChart;
