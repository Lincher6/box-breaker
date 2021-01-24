import { useDispatch } from "react-redux";
import { usersActions } from "store/users";
import jwt_decode from "jwt-decode";
import axios from 'axios';

export const useToken = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    if (token) {
        const { expires, ...user } = jwt_decode(token);
        if (new Date(expires) < Date.now()) {
            dispatch(usersActions.logout());
            return;
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return user;
    }
}