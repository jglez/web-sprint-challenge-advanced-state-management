import React from "react";
import { render } from "react-dom";

import "./index.css";
import App from "./App";
import logger from 'redux-logger'

//1. Add in all necessary components and libary methods.
import smurfReducer from './reducers/index'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import FormImpl from "react-bootstrap/esm/Form";

const { worker } = require('./mocks/browser');
worker.start();

//2. Create a store that includes thunk and logger middleware support.
const smurfStore = createStore(smurfReducer, applyMiddleware(logger))

console.log(smurfStore.getState())

const rootElement = document.getElementById("root");
render(
  //3. Wrap the App component in a react-redux Provider element.
  <Provider store={smurfStore}>
    <App />
  </Provider>,
  rootElement
);




