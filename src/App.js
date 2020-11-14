import React from 'react'
import Grid from "@material-ui/core/Grid";
import {GameField, GameUI, ResultsTable, Title} from "./components";
import {Header} from "./containers/Header";
import {Body} from "./containers/Body";

function App() {
    return (
        <div className="app">
            <Header>
                <GameUI/>
                <Title/>
            </Header>
            <Body>
                <GameField/>
                <ResultsTable/>
            </Body>
        </div>
    );
}

export default App;
