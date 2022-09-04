import { useState, useCallback } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
});

/**
 * It's a custom hook that sends a request to the server and returns an error, a loading state and a
 * function to send the request.
 * @returns An object with three properties: error, isLoading, and sendRequest.
 */
const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (requestConfig: any, applyData: any) => {
      // requestConfig is object, for url, method and data's body
      setIsLoading(true);
      setError(null);
      try {
        const response = await api(requestConfig);

        const data = response.data;
        applyData(data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },
    []
  );
  return { error, isLoading, sendRequest };
};
export default useHttp;
