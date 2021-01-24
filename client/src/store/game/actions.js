import {
    ADD_ELEMENT,
    ADD_SCORE, CLEAR_GAME,
    CLOSE_DIALOG,
    COUNTDOWN,
    PAUSE_GAME, REMOVE_ELEMENT,
    SET_FIELD,
    SET_RESULTS,
    SET_TIME,
    START_GAME,
    SUBTRACT_TIME
} from "./types";
import { usersActions } from "../users";
import {gameApi} from '../../api';
import {appActions} from '../app';

export const addElement = element => ({
    type: ADD_ELEMENT,
    payload: element
});

export const addScore = score => ({
    type: ADD_SCORE,
    payload: score
});

export const removeElement = id => ({
    type: REMOVE_ELEMENT,
    payload: id
});

export const startGame = () => ({
    type: START_GAME
});

export const pauseGame = () => ({
    type: PAUSE_GAME
});

export const countdown = () => ({
    type: COUNTDOWN
});

export const closeDialog = () => ({
    type: CLOSE_DIALOG
});

export const subtractTime = amount => ({
    type: SUBTRACT_TIME,
    payload: amount
});

export const setTime = time => ({
    type: SET_TIME,
    payload: time
});

export const setField = $field => ({
    type: SET_FIELD,
    payload: $field
});

export const setResults = results => ({
    type: SET_RESULTS,
    payload: results
});

export const clearGame = () => ({
    type: CLEAR_GAME,
});

export const submitDialog = result => async (dispatch) => {
    const { results, hiScore, error } = await gameApi.saveResult(result);
    if (error) {
        dispatch(appActions.setError(error));
        return;
    }
    dispatch(usersActions.updateUser({ hiScore }));
    dispatch(setResults(results));

};

export const getResults = () => async dispatch => {
    const { results, error } = await gameApi.getResults();
    if (error) {
        dispatch(appActions.setError(error));
        return;
    }
    dispatch(setResults(results));
};