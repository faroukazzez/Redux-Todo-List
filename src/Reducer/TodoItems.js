import { ADD_INPUT,DELETE_TODO,COMPLETE_TODO,EDIT, GET_TODO } from "../Actions/types";
import {v4 as uuidv4} from 'uuid'

const todos=[{
  todo:'Do Smth',
  id:uuidv4(),
  complete:false
},
{
  todo:'another thing',
  id:uuidv4(),
  complete:false
}]
const TodoItems = (state={todos,todoToUpdate:''},action)=>{
  switch(action.type){
    case(ADD_INPUT):
      return ({...state,todos:[...state.todos,{id:uuidv4(),complete:false,todo:action.payload}]});
    case(DELETE_TODO):
      return ({...state,todos:state.todos.filter(e=>e.id!==action.payload)});
    case(COMPLETE_TODO):
      return ({...state,todos:state.todos.map(e=>e.id=== action.payload ? {...e, complete: !e.complete} : e)})
    case(EDIT):
      return ({todoToUpdate:'',todos:state.todos.map(e=>e.id===action.payload.id ? {...e,todo:action.payload.todo}:e)})
    case(GET_TODO):
      return ({...state,todoToUpdate:action.payload});
    default:
      return state
  }
}
  export default TodoItems