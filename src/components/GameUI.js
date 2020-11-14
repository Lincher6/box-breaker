import React from 'react'
import styled from 'styled-components/macro'
import Button from "@material-ui/core/Button";
import {Timer} from "./Timer";
import {Score} from "./Score";
import {useContextActions, useContextState} from "../context/Context";

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`

export const GameUI = () => {
    const { isStarted } = useContextState()
    const { startGame } = useContextActions()

    return (
        <Container>
            <div>
                <Button
                    variant="contained"
                    color="secondary"
                    disabled={!isStarted}
                >
                    {isStarted ? "PAUSE" : "START"}
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={startGame}
                >
                    {isStarted ? "RESTART" : "NEW GAME"}
                </Button>
            </div>

            <Timer/>
            <Score>

            </Score>
        </Container>
    )
}