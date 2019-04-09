import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Todo</h1>
        <Form/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
