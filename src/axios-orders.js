import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-1bcd8.firebaseio.com/'
});

export default instance;