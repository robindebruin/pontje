import axios from 'axios';

const HttpClient = axios.create({
  baseURL: process.env.PUBLIC_URL,
  timeout: 1000,
});

export default HttpClient;
