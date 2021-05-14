import axios from 'axios';
import { useState, useCallback } from 'react';

export const usePostSearch = ({ url, headers }) => {
  const [res, setRes] = useState({ data: null, error: null, isLoading: false });
  const callAPI = useCallback((request) => {
    setRes((prevState) => ({ ...prevState, isLoading: true }));
    axios
      .post(url, request, headers)
      .then((res) => {
        setRes({ data: res.data, isLoading: false, error: null });
      })
      .catch((error) => {
        setRes({ data: null, isLoading: false, error });
      });
  }, [url, headers]);

  return [res, callAPI];
};
