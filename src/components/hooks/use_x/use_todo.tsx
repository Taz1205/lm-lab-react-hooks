import { useEffect, useState } from "react";
import { isError } from "../../../helpers/is_error";

export interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const useTodo = (url: string) => {
  const [data, setData] = useState<TodoResponse>();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.status === 200) {
          const json = await response.json();

          await new Promise((resolve) => setTimeout(resolve, 3000));
          setData(json);
        }
      } catch (e: unknown) {
        console.log(isError(e) ? e.message : "Unknown error!");
      } finally {
        setIsFetching(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isFetching };
};
