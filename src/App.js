import React from 'react';
import {GameField, GameUI, ResultsTable, Title, GameOverDialog} from "components";
import {GameWindow, Sidebar} from "containers";

function App() {
    return (
        <div className="app">
            <GameWindow>
                <GameUI/>
                <GameField/>
            </GameWindow>
            <Sidebar>
                <Title/>
                <ResultsTable/>
            </Sidebar>
            <GameOverDialog/>
        </div>
    );
}

export default App;
