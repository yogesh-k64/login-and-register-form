import React, { Fragment, useState } from "react";
import State from "./State";

const FlowChart = () => {
  const initialList = [{ id: 34242, next: null }];

  const [list, setList] = useState(initialList);

  const id = Math.random() * 10;

  const createNodeHandler = () => {
    if (list[list.length- 1].next === null) {
      setList([...list,{ id: id, next: null }]);
      console.log('last');
    }
  };
  console.log(list);
  const removeItemHandler = (state) => {
    // const filteredList=list.filter((item)=>{
    //   item.id!==
    // })
    console.log(state.value);
  };

  return (
    <Fragment>
      {list.map((state) => (
        <State
          key={state.id}
          delete={removeItemHandler}
          createNode={createNodeHandler}
        />
      ))}
    </Fragment>
  );
};
export default FlowChart;
