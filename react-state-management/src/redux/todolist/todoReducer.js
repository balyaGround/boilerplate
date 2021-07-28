import { uuid } from "uuidv4";
import { ADD, DEL, LOAD } from "./action";

//initial stata /kondisi awal -> ketika object di load pertama kali
const initState = {
  todos: [],
};

//reducer function
export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DEL:
      const afterDelete = state.todos.filter((item) => item.id !== action.payload);
      return {
        ...state,
        todos: [afterDelete],
      };
    case LOAD:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};
