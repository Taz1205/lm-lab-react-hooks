import { useState } from "react";
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

export function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text: string) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(updatedTask: Task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === updatedTask.id) {
          return updatedTask;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId: number) {
    setTasks(tasks.filter((t) => t.id !== taskId));
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
