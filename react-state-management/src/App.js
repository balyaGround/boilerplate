import React, { createContext, Fragment } from "react";
import "./App.css";

import CounterApp from "./CounterApp";
import TodoList from "./TodoList";

import { ChildComponent } from "./Child";
import TodoListContext from "./ContextAPI/TodoListContext";

function App() {
  return (
    <Fragment>
      {/* <h1>Todo App</h1> */}
      {/* <CounterApp/> */}
      {/* <TodoList /> */}
      {/* <TodoListContext /> */}
      {/* <h1>Contoh penggunaan Context</h1> */}
      {/* <ChildComponent /> */}
      <TodoList />
    </Fragment>
  );
}

export default App;
