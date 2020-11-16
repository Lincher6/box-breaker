import React, {useState} from "react"
import {useContextActions, useContextState} from "../context/Context";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {SECONDARY} from "../constants";

export const GameOverDialog = () => {
    const [ name, setName ] = useState('')
    const [ error, setError ] = useState('')
    const { isGameOver, score, results } = useContextState()
    const { closeDialog, submitDialog } = useContextActions()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.length === 0) {
            setError('must not be empty')
            return
        }
        submitDialog({ name, score })
        closeDialog()
        setError('')
        setName('')
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <Dialog open={isGameOver} fullWidth>
            <DialogTitle >GAME OVER</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Your score: <span style={{color: SECONDARY}}>{score}</span>
                    <br/>
                    Now type your name and earn your place in leaderboards
                </DialogContentText>
                <form onSubmit={handleSubmit}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Your name"
                        onChange={handleChange}
                        helperText={error}
                        error={!!error}
                        fullWidth
                    />
                    <DialogActions>
                        <Button onClick={handleSubmit} color="secondary">
                            SUBMIT
                        </Button>
                        <Button onClick={closeDialog} color="primary">
                            CANCEL
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    )
}