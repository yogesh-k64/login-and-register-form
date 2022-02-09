import React, { Fragment, useState } from "react";
import State from "./State";

const FlowChart = () => {
  const initialList = [{ id: 34242, next: null }];

  const [list, setList] = useState(initialList);

  const id = Math.random() * 10;

  const createNodeHandler = (next) => {
    if (next === null) {
      list[list.length - 1].next = id;
      setList([...list, { id: id, next: null }]);
      
    } else {
      alert("cant create");
    }
  };
  const removeItemHandler = (selectedId) => {
    if(list.length!==1){

      const filteredList = list.filter((item) => item.id !== selectedId);
      filteredList[filteredList.length-1].next=null;
      setList(filteredList)
    }else{
      alert(`can't delete last block, Try adding new block`)
    }
  };

  return (
    <Fragment>
      {list.map((state) => (
        <State
          key={state.id}
          delete={(e) => removeItemHandler(state.id, e)}
          createNode={(e) => createNodeHandler(state.next, e)}
        />
      ))}
    </Fragment>
  );
};
export default FlowChart;
