import axios from "axios";

const API = axios.create({ baseURL:  "https://mario-kart-guxc.herokuapp.com"});

export const getTimes = () => API.get('/times');
export const createTime = (time) => API.post('/createTime', time);