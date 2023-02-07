import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Basic from "./component/Basic";
// import BasicExample from "./example/BasicExample";
// import Functioneg from "./example/Functioneg";
// import String from "./example/String";
// import TemplateLiterals from "./example/TemplateLiterals";
// import StringSearch from "./example/StringSearch";
// import JsNumber from "./example/JsNumber";
import JsNumberMethod from "./example/JsNumberMethod";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <JsNumberMethod />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
