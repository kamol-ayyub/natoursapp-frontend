import { useState, useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
});


/**
 * It's a custom hook that sends a request to the server and returns an isError, a loading state and a
 * function to send the request.
 * @returns An object with three properties: isError, isLoading, and sendRequest.
 */

const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean | null>(null);
  const [response, setResponse] = useState<any>(null);

  const sendRequest = useCallback(
    async (requestConfig: AxiosRequestConfig<object>) => {
      // requestConfig is object, for url, method and data's body
      setIsLoading(true);
      setIsError(null);
      try {
        const response = await api(requestConfig);
        const data = response.data;
        setResponse(data);
      } catch (err: any) {
        setIsLoading(false);
        setIsError(err.message || 'Something went wrong!');
        setResponse(err?.response.data.status);
      }
      setIsLoading(false);
    },
    []
  );
  return {
    isError,
    isLoading,
    response,
    sendRequest,
  };
};
export default useHttp;
