import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { Delete, CompleteTodo,GetTodo} from "../Actions/TodosActions";

class Main extends Component {
  render() {
    return (
      <div className="todos">
        {this.props.todo.todos.map((el) => (
          <div className="todo-items">
            <div className={el.complete ? 'done' : 'todo'} key={el.id}>
              {el.todo}
            </div>
            <div className="btn-group m-1">
              <button
                onClick={() => {
                  this.props.CompleteTodo(el.id);
                }}
                className="btn btn-primary m-1"
              >
                {!el.complete ? "Complete" : "Undo"}
              </button>
              <button
                className="btn btn-primary m-1"
                onClick={() => {
                  this.props.Delete(el.id);
                }}
              >
                Delete
              </button>
              <button className='btn btn-primary m-1' onClick={()=>{this.props.GetTodo(el)}}> Edit </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todo: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Delete: (x) => {
      dispatch(Delete(x));
    },
    CompleteTodo:(x)=>{
      dispatch(CompleteTodo(x))
    },
    GetTodo:(y)=>{
      dispatch(GetTodo(y))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
