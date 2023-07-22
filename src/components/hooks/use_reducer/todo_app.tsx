import { useReducer } from "react";
import { AddTask } from "./add_task.js";
import { TaskList } from "./task_list.js";

export interface Task {
  id: number;
  text: string;
  done: boolean;
}

const initialTasks: Task[] = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

function tasksReducer(state: Task[], action: { type: string; payload: any }) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: state.length, text: action.payload, done: false },
      ];
    case "CHANGE_TASK":
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
}

export function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text: string) {
    dispatch({ type: "ADD_TASK", payload: text });
  }

  function handleChangeTask(updatedTask: Task) {
    dispatch({ type: "CHANGE_TASK", payload: updatedTask });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  }

  return (
    <>
      <h2>useReducer</h2>

      <h3>Prague Itinerary</h3>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
