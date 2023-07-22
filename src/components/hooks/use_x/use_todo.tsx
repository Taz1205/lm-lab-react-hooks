import { useState, useEffect } from "react";
export interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export function useFetch<T = TodoResponse>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const response = await fetch(url);
        if (response.ok) {
          const json: T = await response.json();
          await new Promise((resolve) => setTimeout(resolve, 2000));
          setData(json);
        } else {
          throw new Error("Error fetching data");
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsFetching(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isFetching };
}
