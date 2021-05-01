import { useState, useEffect } from "react";
import axios from "axios";

export const useGet = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
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
  }, [url]);

  return { data, isLoading, error };
};
