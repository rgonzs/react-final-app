import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    axios
      .get(url, { cancelToken: source.token })
      .then((response) => {
        if (response.status !== 200) {
          throw Error("The specified resource can't be reached");
        } else {
          setData(response.data);
          setIsLoading(false);
          setError(false);
        }
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
    return () => source.cancel('axios request cancelled');
  }, [url]);

  return { data, isLoading, error };
};
