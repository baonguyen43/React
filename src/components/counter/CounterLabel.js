import React from "react";
import { useSelector } from "react-redux";

function CounterLabel() {
  const count = useSelector((state) => state.counterReducer.count); // count = thịt

  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
}

export default CounterLabel;
