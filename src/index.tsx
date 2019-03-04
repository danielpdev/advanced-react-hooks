import React, { useReducer } from "react";
import { render } from "react-dom";
import Todos from "./todos/Todos";

function App() {
  return <Todos />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
