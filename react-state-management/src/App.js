import React, { createContext, Fragment } from "react";
import "./App.css";

import CounterApp from "./CounterApp";

import { ChildComponent } from "./Child";
import TodoListContext from "./ContextAPI/TodoListContext";
import TodoListRedux from "./redux/todolist";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <TodoListRedux />
      </Provider>
      {/* <h1>Todo App</h1> */}
      {/* <CounterApp/> */}
      {/* <TodoList /> */}
      {/* <TodoListContext /> */}
      {/* <h1>Contoh penggunaan Context</h1> */}
      {/* <ChildComponent /> */}
    </Fragment>
  );
}

export default App;
