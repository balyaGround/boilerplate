//Actions Constant
import axios from "axios";
export const ADD = "ADD_TODO";
export const DEL = "DELETE_TODO";
export const LOAD = "LOAD_TODO";

export const loadTodo = async (dispatch) => {
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

export const delTodo = async (id, dispatch) => {
  await axios.delete(`http://localhost:3006/todos/${id}`);
  await dispatch({
    type: "DELETE_TODO",
    payload: id,
  });
};
