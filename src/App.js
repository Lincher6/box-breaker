import React from 'react'
import Grid from "@material-ui/core/Grid";
import {GameField, GameUI, ResultsTable, Title} from "./components";
import {GameOverDialog} from "./components/GameOverDialog";
import {GameWindow} from "./containers/GameWindow";
import {SubWindow} from "./containers/SubWindow";

function App() {
    return (
        <div className="app">
            <GameWindow>
                <GameUI/>
                <GameField/>
            </GameWindow>
            <SubWindow>
                <Title/>
                <ResultsTable/>
            </SubWindow>
            <GameOverDialog/>
        </div>
    );
}

export default App;
