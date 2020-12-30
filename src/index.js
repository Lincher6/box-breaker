import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from "./globalStyles";
import App from './App';
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from "./lib/theme";
import {Provider} from "react-redux";
import {store} from "./store";

ReactDOM.render(
    <>
        <GlobalStyle/>
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <App/>
            </Provider>
        </MuiThemeProvider>
    </>
    , document.getElementById('root')
);
