import { combineReducers } from 'redux'
import TodoItems from './TodoItems'

export default combineReducers({items:TodoItems})
// export default combineReducers({mycounter: CounterReducer})