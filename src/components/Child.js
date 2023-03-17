import React from "react";

const Child = ({ count }) => {
  console.log("Child is rendered");
  return <div>Child count is: {count}</div>;
};

export default React.memo(Child);
