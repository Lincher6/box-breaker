import axios from 'axios';
import { createError } from 'lib/utils';

axios.defaults.baseURL = 'http://localhost:3000'

export const gameApi = {
    getResults: async () => {
        try {
            const response = await axios.get('/results');
            return response.data;
        } catch (error) {
            return createError(error);
        }

    },
    saveResult: async (result) => {
        try {
            const response = await axios.post('/results', result);
            return response.data;
        } catch (error) {
            return createError(error);
        }

    },
}