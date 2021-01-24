import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { PRIMARY, SECONDARY } from 'lib/constants';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions, gameSelectors } from 'store/game';
import { usersSelectors } from 'store/users';
import {Span} from 'globalStyles';

export const GameOverDialog = () => {
    const isGameOver = useSelector(gameSelectors.isGameOver);
    const score = useSelector(gameSelectors.score);
    const { name, hiScore } = useSelector(usersSelectors.user);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(gameActions.submitDialog({ name, score }));
        dispatch(gameActions.closeDialog());
    }

    const handleClose = () => {
        dispatch(gameActions.closeDialog());
    }

    return (
        <Dialog open={isGameOver} maxWidth='sm'>
            <DialogTitle >GAME OVER</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Congratulations <Span color={PRIMARY} >{name}</Span>
                    <br/>
                    Your score: <Span color={SECONDARY} >{score}</Span>
                    <br/>
                    Your Hi-score: <Span color={SECONDARY} >{hiScore}</Span>
                </DialogContentText>
                <DialogActions>
                    <Button onClick={handleSubmit} color='secondary' variant='outlined'>
                        SAVE
                    </Button>
                    <Button onClick={handleClose} color='primary' variant='outlined'>
                        CANCEL
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}