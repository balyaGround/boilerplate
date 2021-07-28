//Actions Constant
import axios from "axios";
import { dispatch } from "react";
export const ADD = "ADD_TODO";
export const DEL = "DELETE_TODO";
export const LOAD = "LOAD_TODO";

export const loadTodo = async () => {
  const res = await axios.get("http://localhost:3006/todos");
  const dataAPI = await res.data;
  await dispatch({
    type: "LOAD_TODO",
    payload: dataAPI,
  });
  console.log(res.data);
};

export const addTodo = async (dispatch, todo) => {
  await axios.post("http://localhost:3006/todos", todo); //manipulasi server
  await dispatch({
    type: "ADD_TODO",
    payload: todo,
  }); //manipulasi state
};

export const delTodo = async (id) => {
  await axios.delete(`http://localhost:3006/todos/${id}`);
  await dispatch({
    type: "DELETE_TODO",
    payload: id,
  });
};
