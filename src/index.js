import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MuiThemeProvider} from "@material-ui/core";
import { theme } from "./lib/theme";
import {Provider} from "react-redux";
import {store} from "./store";

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <App/>
        </Provider>
    </MuiThemeProvider>
    , document.getElementById('root'));
