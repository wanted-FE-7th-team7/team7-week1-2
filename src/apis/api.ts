import axios from 'axios';

const baseURL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const URLS = {
  USER: '/user',
  ISSUES: {
    ANGULAR_CLI: '/repos/angular/angular-cli/issues',
  },
};

export const http = axios.create({
  baseURL,
  timeout: 1000,
});

http.interceptors.request.use(req => {
  if (req.headers) {
    req.headers.Accept = 'application/vnd.github+json';
    req.headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }

  return req;
});
