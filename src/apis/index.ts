import axios from 'axios';

// baseURL: process.env.REACT_BASE_URL,
export const instance = axios.create({
  baseURL: `http://localhost:4000/borad`,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
