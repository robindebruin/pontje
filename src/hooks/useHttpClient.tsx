import React, { useCallback, useState } from 'react';
import HttpClient from '../utils/HttpClients';

type Status = 'LOADING' | 'ERROR' | 'SUCCESS';
const LOADING = 'LOADING';
const ERROR = 'ERROR';
const SUCCESS = 'SUCCESS';

function useHttpClient<T>(): [T, Status, (arg?: string) => void] {
  const [response, setResponse] = useState();
  const [hookStatus, setHookStatus] = useState<Status>(LOADING);

  const fetchData = useCallback(async axiosInstance => {
    try {
      setHookStatus(LOADING);
      const fetchResponse = await HttpClient.get(axiosInstance);
      setHookStatus(SUCCESS);
      setResponse(fetchResponse.data);
    } catch (error) {
      console.error(error);
      setHookStatus(ERROR);
    }
  }, []);

  return [response, hookStatus, fetchData];
}

export default useHttpClient;
