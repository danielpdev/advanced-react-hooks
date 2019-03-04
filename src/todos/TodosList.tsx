import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ items }) => {
  return (
    <div>
      {items.map(todo => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </div>
  );
};

export default TodosList;
