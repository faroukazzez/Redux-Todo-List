import React, { Component } from "react";
import { connect } from "react-redux";
import { AddTodo, EditItem } from "../Actions/TodosActions";
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userinput: '',
    };
  }
  componentWillReceiveProps(nextprops){
    console.log(nextprops)
    if (nextprops.items.todoToUpdate.todo) this.setState({
      userinput:nextprops.items.todoToUpdate.todo
    })
    else this.setState({userinput:''})
  }
  handelChange = (e) => {
    this.setState({
      userinput: e.target.value,
    });
  };
  add=()=>{
    this.props.AddTodo(this.state.userinput)
      this.setState({userinput:''})
  }
  edit = () => {
      this.props.EditItem({
        ...this.props.items.todoToUpdate,
        todo: this.state.userinput,
      })
      this.setState({userinput:''})
  };
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            onChange={(e) => {this.handelChange(e)}}
            value={this.state.userinput}/>
          <button onClick={this.props.items.todoToUpdate ? this.edit:this.add}>
            {this.props.items.todoToUpdate ? "EDIT" : "ADD TODO"}
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    AddTodo: (x) => {
      dispatch(AddTodo(x));
    },
    EditItem: (x) => {
      dispatch(EditItem(x));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Input);
