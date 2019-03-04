import React, { useContext } from "react";
import { TodoContext } from "./contexts";

const TodoItem = ({ id, completed, text }) => {
  const dispatch = useContext(TodoContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch({ type: "completed", payload: id })}
      />
      <input
        type="text"
        defaultValue={text}
        onChange={({ target: { value } }) => {
          dispatch({ type: "update", payload: { text: value, id } });
        }}
      />
      <button
        onClick={() =>
          dispatch({
            type: "delete",
            payload: id
          })
        }
      >
        Delete
      </button>
      {id}{" "}
    </div>
  );
};

export default TodoItem;
