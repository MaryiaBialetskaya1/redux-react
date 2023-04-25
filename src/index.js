import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//1 - store -all data
//2 - action

//A
const addToCart = () => {
  return {
    type: "ADD_TO_CART",
  };
};
//B
const addItem = () => {
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

//3 - reducer
//4 - dispatch

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
