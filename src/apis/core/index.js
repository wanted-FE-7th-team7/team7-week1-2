import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  timeout: 3000,
  headers: { 'Content-Type': `application/json` },
  auth: process.env.REACT_APP_ACCESS_TOKEN,
});

export default instance;
