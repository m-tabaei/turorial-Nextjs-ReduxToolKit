"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  selectNumber,
} from "@/redux/features/number/numberSlice";

function Number() {
  const number = useSelector(selectNumber);
  const dispach = useDispatch();
  return (
    <div>
      <h2>Sum of Counters is : {number}</h2>
      <div className="form-input">
        <button onClick={() => dispach(increment())}>Increment + 1</button>
        <button onClick={() => dispach(decrement())}>Decrement - 1</button>
        <button onClick={() => dispach(reset())}>Reset</button>
      </div>
    </div>
  );
}

export default Number;
