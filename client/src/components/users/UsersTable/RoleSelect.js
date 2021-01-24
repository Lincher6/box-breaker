import { useDispatch } from 'react-redux';
import { usersActions } from 'store/users';
import { Select } from './styles';
import React from 'react';

export const RoleSelect = ({ user, currentUser }) => {
    const isCurrentUser = user._id === currentUser._id;
    const isAdmin = user.role === 'admin';
    const dispatch = useDispatch();

    const changeRole = event => {
        dispatch(usersActions.changeRole({
            login: user.login,
            key: 'role',
            value: event.target.value
        }))
    }

    return (
        <Select
            admin={isAdmin}
            disabled={isCurrentUser}
            onChange={changeRole}
            defaultValue={isAdmin ? 'admin' : 'player'}
        >
            <option>player</option>
            <option>admin</option>
        </Select>
    )
}