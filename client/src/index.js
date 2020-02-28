import React from "react";
import ReactDOM from "react-dom";

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.scss";

// Components
import App from "./App";

// Services
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";

// Reducer
import { rootReducer } from "./reducers/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
, rootElement);