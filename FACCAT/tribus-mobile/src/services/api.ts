import axios from 'axios';
const ip = 'lit-castle-48937.herokuapp.com'
const port = 3333
export const baseUrl = `https://${ip}/`

const api = axios.create({
    // baseURL: "http://192.168.101.9:3333/" // local, jaime
    // baseURL: 'http://10.0.2.2:3333/'
    baseURL: baseUrl
});

export default api;