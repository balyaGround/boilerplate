//Actions Constant
export const ADD = "ADD_TODO";
export const DEL = "DELETE_TODO";
export const LOAD = "LOAD_TODO";

//Actions
const addTodo = (todo) => ({
  type: ADD,
  payload: {
    id: Math.random().toString(),
    todo: todo,
  },
});

const delTodo = (id) => ({
  type: DEL,
  payload: id,
});

const loadTodo = (id) => ({
  type: LOAD,
  payload: id,
  todo: todo,
});
