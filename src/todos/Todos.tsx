import React, { useReducer, useContext, useEffect, useRef } from "react";
import { TodosReducer } from "./reducers";
import TodosList from "./TodosList.tsx";
import { TodoContext as Context } from "./contexts";
import useEffectOnce from "./hooks/useEffectOnce";

const TodosApp = () => {
  const [state, dispatch] = useReducer(TodosReducer, []);
  const didRun = useRef(false);

  useEffectOnce(() => {
    const raw = localStorage.getItem("data");
    dispatch({ type: "reset", payload: JSON.parse(raw) });
  });

  useEffect(
    () => {
      localStorage.setItem("data", JSON.stringify(state));
    },
    [state]
  );
  return (
    <Context.Provider value={dispatch}>
      <h1>Todos App</h1>
      <button onClick={() => dispatch({ type: "add" })}>Add</button>
      <TodosList items={state} />
    </Context.Provider>
  );
};

export default TodosApp;
