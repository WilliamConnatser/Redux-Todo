import React, {Component} from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: ''
        }
    }

    onChangeHandler = event => {
        this.setState({filter: event.target.value})
    }

    render() {
        return (
            <div>
                <h2>Filter todos...</h2>
                <input onChange={this.onChangeHandler} value={this.state.filter}></input>
                {this
                    .props
                    .todoList
                    .filter(todo => todo.value.startsWith(this.state.filter)).map(todo =>< Todo key = {
                        todo.value
                    }
                    todo = {
                        todo
                    } />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {todoList: state.todoList}
}

export default connect(mapStateToProps)(TodoList);