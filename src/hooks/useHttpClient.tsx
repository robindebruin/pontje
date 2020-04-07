import React, { useCallback, useState } from 'react';
import HttpClient from '../utils/HttpClients';
import { AxiosRequestConfig } from 'axios';

type Status = 'LOADING' | 'ERROR' | 'SUCCESS';
const LOADING = 'LOADING';
const ERROR = 'ERROR';
const SUCCESS = 'SUCCESS';

function useHttpClient<T>() {
  const [response, setResponse] = useState<T>();
  const [hookStatus, setHookStatus] = useState<Status>(LOADING);

  const fetchData = useCallback(async (axiosInstance: AxiosRequestConfig) => {
    try {
      setHookStatus(LOADING);
      const fetchResponse = await HttpClient.request(axiosInstance);
      setHookStatus(SUCCESS);
      setResponse(fetchResponse.data);
    } catch (error) {
      console.error(error);
      setHookStatus(ERROR);
    }
  }, []);

  return [response, hookStatus, fetchData] as const;
}

export default useHttpClient;
