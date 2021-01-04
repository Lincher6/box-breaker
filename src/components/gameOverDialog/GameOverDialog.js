import React, {useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {SECONDARY} from "lib/constants";
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "store";

export const GameOverDialog = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const isGameOver = useSelector(selectors.isGameOver);
    const score = useSelector(selectors.score);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length === 0) {
            setError('must not be empty');
            return;
        }
        dispatch(actions.submitDialog({ name, score }));
        dispatch(actions.closeDialog());
        setError('');
        setName('');
    }

    const handleClose = () => {
        dispatch(actions.closeDialog());
    }

    const handleChange = (e) => {
        setName(e.target.value);
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
                        <Button onClick={handleClose} color="primary">
                            CANCEL
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    )
}