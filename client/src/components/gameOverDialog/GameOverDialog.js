import React, {useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {PRIMARY, SECONDARY} from "lib/constants";
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "store";

export const GameOverDialog = () => {
    const isGameOver = useSelector(selectors.isGameOver);
    const score = useSelector(selectors.score);
    const { name, hiScore } = useSelector(selectors.user);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let newHiScore = score > hiScore ? score : null;
        dispatch(actions.submitDialog({ name, score, newHiScore }));
        dispatch(actions.closeDialog());
    }

    const handleClose = () => {
        dispatch(actions.closeDialog());
    }

    return (
        <Dialog open={isGameOver} fullWidth>
            <DialogTitle >GAME OVER</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Congratulations <span style={{color: PRIMARY}}>{name}</span>
                    <br/>
                    Your score: <span style={{color: SECONDARY}}>{score}</span>
                    <br/>
                    Your Hi-score: <span style={{color: SECONDARY}}>{hiScore}</span>
                </DialogContentText>
                <DialogActions>
                    <Button onClick={handleSubmit} color="secondary">
                        SAVE
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        CANCEL
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}