import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MuiThemeProvider} from "@material-ui/core";
import { theme } from "./theme";
import {ContextProvider} from "./context/Context";

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <ContextProvider>
            <App/>
        </ContextProvider>
    </MuiThemeProvider>
    , document.getElementById('root'));
