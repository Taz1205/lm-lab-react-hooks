import { useState, useEffect } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const APICall = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState(true);

  const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(jsonTypicode);
        const content = await response.json();
        setTodo(content);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return "Loading...";

  return (
    <>
      <h2>useEffect</h2>
      {todo ? (
        <div>
          <p>{`Todo ID: ${todo.id}`}</p>
          <p>{`Title: ${todo.title}`}</p>
          <p>{`Completed: ${todo.completed}`}</p>
        </div>
      ) : (
        <p>No todo fetched.</p>
      )}
    </>
  );
};
