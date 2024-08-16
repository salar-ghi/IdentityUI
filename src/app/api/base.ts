import axios from 'axios';

const base = axios.create({
    baseURL: 'https://localhost:5010/api',
    headers :{
        'Content-Type': 'application/json',
    },
});

export default base;