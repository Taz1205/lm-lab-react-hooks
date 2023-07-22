import { TodoResponse, useTodo } from "./use_todo";

export const Todo1 = () => {
  const { data, isFetching, error } = useTodo<TodoResponse>(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h3>Custom Hook 1</h3>
      {isFetching ? <p>Fetching...</p> : <p>{data?.title}</p>}
    </>
  );
};

export const Todo2 = () => {
  const { data, isFetching, error } = useTodo<TodoResponse>(
    "https://jsonplaceholder.typicode.com/todos/2"
  );

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h3>Custom Hook 2</h3>
      {isFetching ? <p>Fetching...</p> : <p>{data?.title}</p>}
    </>
  );
};
