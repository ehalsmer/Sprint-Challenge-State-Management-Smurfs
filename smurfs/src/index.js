import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// import reducer here
import { reducer } from './reducers/reducer';

import "./index.css";
import App from "./components/App";

// create store
const store = createStore(reducer, applyMiddleware(thunk));

// wrap component tree in Provider, with store passed as prop
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
