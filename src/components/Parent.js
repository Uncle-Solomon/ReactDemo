import React from "react";
import Child from "./Child";
import { useState } from "react";

const Parent = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const handleParent = () => {
    setParentCount(parentCount + 1);
  };

  const handleChild = () => {
    setChildCount(childCount + 1);
  };
  return (
    <div>
      This is a parent component
      <h1>Parent count is: {parentCount}</h1>
      <Child count={childCount} />
      <button onClick={handleParent}>Increase Parent count</button>
      <button onClick={handleChild}>Increase Child count</button>
    </div>
  );
};

export default Parent;
