import axios, { AxiosInstance } from 'axios';

const HttpClient: AxiosInstance = axios.create({
  baseURL: process.env.PUBLIC_URL,
  timeout: 1000,
});

export default HttpClient;
