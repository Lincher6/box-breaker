import { usersActions } from "../users";
import {SET_ERROR, SET_LOADING} from "./types";
import {gameActions} from '../game';

export const setLoading = loading => ({
    type: SET_LOADING,
    payload: loading
});

export const setError = error => ({
    type: SET_ERROR,
    payload: error
});

export const initializeApp = () => async dispatch => {
    dispatch(setLoading(true));
    await dispatch(gameActions.getResults());
    await dispatch(usersActions.getUser());
    dispatch(setLoading(false));
};