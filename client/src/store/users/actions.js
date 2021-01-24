import {CLEAR_USERS, SET_PAGE, SET_SEARCH, SET_SORT, SET_USER, SET_USERS, UPDATE_USER} from "./types";
import { usersApi } from 'api';
import { usersActions } from './index';
import axios from 'axios';
import { appActions } from '../app';

export const setUser = user => ({
    type: SET_USER,
    payload: user
});

export const setUsers = (users, totalUserCount) => ({
    type: SET_USERS,
    payload: { users, totalUserCount }
});

export const updateUser = properties => ({
    type: UPDATE_USER,
    payload: properties
});

export const clearUsers = () => ({
    type: CLEAR_USERS,
});

export const changeRole = (data) => async (dispatch, getState) => {
    const { users, totalUserCount } = getState().users;
    const { user, error } = await usersApi.updateUser(data);
    if (error) {
        dispatch(appActions.setError(error));
        return;
    }
    const newUsers = users.map(el => el._id === user._id ? user : el);
    dispatch(setUsers(newUsers, totalUserCount));
}

export const setPage = page => ({
    type: SET_PAGE,
    payload: page
});

export const setSearch = search => ({
    type: SET_SEARCH,
    payload: search
});

export const setSort = sortParams => ({
    type: SET_SORT,
    payload: sortParams
});

export const getUsers = () => async (dispatch, getState) => {
    const { pageSize, search, sortParams, page } = getState().users;
    const { users, totalUserCount, error } = await usersApi.getUsers({ page, pageSize, search, sortParams });
    if (error) {
        dispatch(appActions.setError(error));
        return;
    }
    dispatch(setUsers(users, totalUserCount));
}

export const getUser = () => async dispatch => {
    const { user, error } = await usersApi.getUser();
    if (error) {
        dispatch(appActions.setError(error));
        return;
    }
    dispatch(setUser(user));
}

export const logout = history => dispatch =>{
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    dispatch(usersActions.setUser({}));
    history.push('/login')
}