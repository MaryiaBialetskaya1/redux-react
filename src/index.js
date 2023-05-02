import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

//2 - action

//A
const addToCart = () => {
  return {
    type: "ADD_TO_CART",
  };
};
//B
const removeItem = () => {
  return {
    type: "REMOVE_ITEM",
  };
};
//C
const changeNumberOFItems = () => {
  return {
    type: "CHANGE_NUMBER",
  };
};

//3 - reducer - descripton of actions to change state

const cart = (state = 0, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return state + 1;
    case "REMOVE_ITEM":
      return state - 1;
    default:
  }
};

//1 - store -all data
let store = createStore(cart);
store.subscribe(() => console.log(store.getState()));

//4 - dispatch
store.dispatch(addToCart());
store.dispatch(addToCart());
store.dispatch(addToCart());
store.dispatch(addToCart());
store.dispatch(removeItem());
store.dispatch(removeItem());
store.dispatch(removeItem());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
