import { ADD_INPUT,DELETE_TODO,COMPLETE_TODO,EDIT,GET_TODO} from "./types";

export const AddTodo = (inputvalue) => {
  return {
    type:ADD_INPUT,
    payload:inputvalue}
};
export const Delete = (id) => {
  return {
    type:DELETE_TODO,
    payload:id}
};
export const CompleteTodo = (id) => {
  return {
    type:COMPLETE_TODO,
    payload:id}
};
export const EditItem = (todoToEdit) => {
  return {
    type:EDIT,
    payload:todoToEdit,
    }
};
export const GetTodo = (item) => {
  return {
    type:GET_TODO,
    payload:item,
    }
};
