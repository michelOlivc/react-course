import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-course-myburguer.firebaseio.com/'
});

export default instance;