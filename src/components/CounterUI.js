import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/slices/counterSlice";

const CounterUI = () => {
  const count = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  const incrementCounter = () => dispatch(increment());
  return (
    <section className="flex flex-col items-center justify-center mb-16">
      <p>{count}</p>
      <div className="flex justify-center gap-5 border p-3 mt-2">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={incrementCounter}>+</button>
      </div>
    </section>
  );
};

export default CounterUI;
