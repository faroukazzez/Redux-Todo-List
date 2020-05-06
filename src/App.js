import React, { Component } from 'react';
import "./App.css";
import Input from './TodoComponents/Input'
import Main from './TodoComponents/Items'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
    
  render() {
    return (
      <div className='App'>
        <Input/>
        <Main />
      </div>
    );
  }

}

export default App;