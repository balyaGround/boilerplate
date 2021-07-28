import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; //ini useDispatch dan useSelector dari react-redux
import { addTodo, delTodo, loadTodo } from "./action";
import "./style.css";
import { uuid } from "uuidv4";
export default function TodoListRedux() {
  const [todo, setTodo] = useState(""); //todo untuk menyimpan hasil dari element input
  const dispatch = useDispatch();
  const listTodos = useSelector((state) => state.todos.todos);
  console.log(listTodos);

  const submit = (e) => {
    e.preventDefault();
    if (todo === "") return;
    const newTodo = {
      id: uuid(), //Math.random() akan generate random number dari 0 < 1
      todo: todo,
    };
    addTodo(dispatch, newTodo);
    setTodo("");
  };

  useEffect(() => {
    loadTodo(dispatch, todo);
  }, []);

  return (
    <div>
      <div className="input">
        <form onSubmit={submit}>
          <div className="mb-3">
            <label Htmlfor="exampleInputEmail1" className="form-label">
              Input Your Activity
            </label>
            <input type="Text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setTodo(e.target.value)} value={todo} />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="post">
        {listTodos.map((item, idx) => (
          <ul key={idx}>
            <li>{item.todo}</li>
            <button className="btn btn-success ms-auto" onClick={() => delTodo(item.id, dispatch)}>
              delete your activity
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
}
