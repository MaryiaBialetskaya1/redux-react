import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  multiplyByAmount,
  incrementAsync,
} from "./redux-toolkit/counter";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="App">
      <div className="row">
        <button className="button" onClick={() => dispatch(increment())}>
          +
        </button>
        <span className="value">{count}</span>
        <button className="button" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <div className="row">
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className="button"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className="button"
          onClick={() =>
            dispatch(decrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Minus Amount
        </button>
        <button
          className="button"
          onClick={() =>
            dispatch(multiplyByAmount(Number(incrementAmount) || 0))
          }
        >
          Multiply Amount
        </button>
        <button
          className="button asyncButton"
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}

export default App;
