import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { GlobalStyles } from "./globalStyle";
import "normalize.css";
import { firebase } from './lib/firebase.prod';

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
