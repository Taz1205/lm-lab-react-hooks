import { useReducer } from "react";
import { Task } from "./todo_app";

type ActionType =
  | { type: "TOGGLE_EDIT_MODE" }
  | { type: "CHANGE_TEXT"; text: string };

function reducer(
  state: { isEditing: boolean; text: string },
  action: ActionType
) {
  switch (action.type) {
    case "TOGGLE_EDIT_MODE":
      return { ...state, isEditing: !state.isEditing };
    case "CHANGE_TEXT":
      return { ...state, text: action.text };
    default:
      throw new Error();
  }
}

export const TaskDisplay: React.FC<{
  task: Task;
  onChange: (task: Task) => void;
  onDelete: (taskId: number) => void;
}> = ({ task, onChange, onDelete }) => {
  const [state, dispatch] = useReducer(reducer, {
    isEditing: false,
    text: task.text,
  });

  if (state.isEditing) {
    return (
      <>
        <input
          className="input"
          value={state.text}
          type="text"
          onChange={(e) => {
            dispatch({ type: "CHANGE_TEXT", text: e.target.value });
          }}
        />
        <button
          className="task-list__button"
          onClick={() => {
            onChange({ ...task, text: state.text });
            dispatch({ type: "TOGGLE_EDIT_MODE" });
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    return (
      <div>
        <p>{task.text}</p>
        <button
          className="task-list__button"
          onClick={() => dispatch({ type: "TOGGLE_EDIT_MODE" })}
        >
          Edit
        </button>
        <button className="task-list__button" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    );
  }
};
