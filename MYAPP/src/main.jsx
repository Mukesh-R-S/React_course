import React from "react";
import ReactDOM from "react-dom/client";
import TestFunction from "./components/Test";
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const num1 = 1;
const num2 = 2;
ReactDOM.createRoot(document.getElementById("root")).render(
  <TestFunction course="react" version="14" num1={num1} num2={num2} />
);
