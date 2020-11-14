import React from 'react'
import styled from 'styled-components/macro'
import Button from "@material-ui/core/Button";
import {Timer} from "./Timer";
import {Score} from "./Score";

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`

export const GameUI = () => {
    return (
        <Container>
            <div>
                <Button variant="contained" color="secondary">
                    START
                </Button>
                <Button variant="contained" color="secondary">
                    NEW GAME
                </Button>
            </div>

            <Timer/>
            <Score>

            </Score>
        </Container>
    )
}