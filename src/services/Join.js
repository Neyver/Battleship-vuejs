import axios from 'axios';
const URL = 'http://localhost:3000/game'

export default {
    join(token) {
        return axios.get(URL, token);
    }
};