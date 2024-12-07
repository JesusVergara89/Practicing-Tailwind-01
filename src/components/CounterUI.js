import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incremeentByAmount,
} from "../store/slices/counterSlice";

const CounterUI = () => {
  const count = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  const incrementCounter = () => dispatch(increment());
  const [incremeentAmount, setIncremeentAmount] = useState(0);

  const addValue = Number(incremeentAmount) || 0;

  const resetAll = () => {
    setIncremeentAmount(0);
    dispatch(reset());
  };

  return (
    <section className="flex flex-col items-center justify-center mb-16">
      <p>{count}</p>
      <div className="flex justify-center gap-5 border p-3 mt-2 rounded-2xl">
        <button
          className="border px-2 bg-slate-800 hover:bg-slate-700 rounded-md"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className="border px-2 bg-slate-800 hover:bg-slate-700 rounded-md"
          onClick={incrementCounter}
        >
          +
        </button>
      </div>
      <input
        className="border px-2 bg-slate-800 hover:bg-slate-700 rounded-md"
        type="text"
        value={incremeentAmount}
        onChange={(e) => setIncremeentAmount(e.target.value)}
      />
      <div className="flex justify-center gap-5 border p-3 mt-2 rounded-2xl">
        <button
          className="border px-2 bg-slate-800 hover:bg-slate-700 rounded-md"
          onClick={() => dispatch(incremeentByAmount(addValue))}
        >
          Add amount
        </button>
        <button
          className="border px-2 bg-slate-800 hover:bg-slate-700 rounded-md"
          onClick={resetAll}
        >
          reset
        </button>
      </div>
    </section>
  );
};

export default CounterUI;
