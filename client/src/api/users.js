import axios from 'axios';
import { createError } from 'lib/utils';

export const usersApi = {
    login: async ({ login = '', password = '' }) => {
        try {
            const response = await axios.post('/login', { login, password});
            return response.data;
        } catch ({ response }) {
            return { errors: response.data };
        }

    },

    register: async ({ login = '', name = '', password = '', confirmPassword = '' }) => {
        try {
            const response = await axios.post('/registration', { login, name, password, confirmPassword });
            return response.data;
        } catch ({ response }) {
            return { errors: response.data };
        }
    },

    getUser: async () => {
        try {
            const response = await axios.get('/user');
            return response.data;
        } catch (error) {
            return createError(error);
        }
    },

    updateUser: async ({ login, key, value }) => {
        try {
            const response = await axios.patch('/user', { login, key, value });
            return response.data;
        } catch (error) {
            return createError(error);
        }
    },

    getUsers: async ({ page = 1, pageSize = 10, search = '', sortParams = { hiScore: 1 } }) => {
        try {
            const response = await axios.get('/users', {
                params: {
                    page,
                    pageSize,
                    searchString: search,
                    sortParams: JSON.stringify(sortParams)
                }
            });
            return response.data;
        } catch (error) {
            return createError(error);
        }
    }
}