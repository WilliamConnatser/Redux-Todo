import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div style={this.props.todo.complete ? {color: 'green'} : {color: 'red'}}>
        {this.props.todo.value}
      </div>
    )
  }
}
