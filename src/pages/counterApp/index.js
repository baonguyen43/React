import React from "react";

import DecreaseCounterButton from "../../components/counter/DecreaseCounterButton";
import IncreaseCounterButton from "../../components/counter/IncreaseCounterButton";
import CounterLabel from "../../components/counter/CounterLabel";

function CounterApp() {
  return (
    <div>
      <DecreaseCounterButton />
      <CounterLabel />
      <IncreaseCounterButton />
    </div>
  );
}

export default CounterApp;
