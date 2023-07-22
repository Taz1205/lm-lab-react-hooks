import { useState } from "react";

export const AddTask: React.FC<{ onAddTask: (text: string) => void }> = ({
  onAddTask,
}) => {
  const [text, setText] = useState("");

  return (
    <div className="add-todo-container">
      <input
        type="text"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => {
          if (text.trim() !== "") {
            onAddTask(text);
            setText("");
          }
        }}
      >
        Add
      </button>
    </div>
  );
};
