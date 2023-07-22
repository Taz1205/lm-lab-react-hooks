import { useState, useEffect } from "react";
export interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export interface UseTodoOptions {
  headers?: Record<string, string>;
}

export const useTodo = <T = TodoResponse,>(
  url: string,
  options: UseTodoOptions = {}
): { data: T | null; isFetching: boolean; error: string | null } => {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const response = await fetch(url, { headers: options.headers });
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
  }, [options.headers, url]);

  return { data, isFetching, error };
};
