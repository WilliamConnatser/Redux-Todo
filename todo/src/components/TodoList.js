import React, { Component } from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todoList.map(todo=><Todo key={todo.value} todo={todo}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {todoList: state.todoList}
}

export default connect(
    mapStateToProps
)(TodoList);