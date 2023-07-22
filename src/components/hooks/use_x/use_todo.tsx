import { useState, useEffect } from "react";
export interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const useFetch = <T = TodoResponse,>(
  url: string
): { data: T | null; isFetching: boolean; error: string | null } => {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const response = await fetch(url);
        if (response.ok) {
          const json: T = await response.json();
          await new Promise((resolve) => setTimeout(resolve, 3000));
          setData(json);
        } else {
          throw new Error("Error fetching data");
        }
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setIsFetching(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isFetching, error };
};
