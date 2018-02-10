import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://marian-reactjs-burger.firebaseio.com/'
});

export default instance;