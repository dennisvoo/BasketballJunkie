import axios from 'axios';

const env = process.env.NODE_ENV; // current environment

export const app = axios.create({
  baseURL:
    env === 'production'
      ? 'https://cors-proxy-dv.herokuapp.com/https://basketballjunkie.herokuapp.com/' // production
      : 'http://localhost:5000/', // development
});