import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

//1. Add in all necessary components and libary methods.
import smurfReducer from './reducers/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const { worker } = require('./mocks/browser');
worker.start();

//2. Create a store that includes thunk and logger middleware support.
const smurfStore = createStore(smurfReducer)

console.log(smurfStore.getState())

const rootElement = document.getElementById("root");
ReactDOM.render(
  //3. Wrap the App component in a react-redux Provider element.
  <Provider store={smurfStore}>
    <App />
  </Provider>,
  rootElement
);




