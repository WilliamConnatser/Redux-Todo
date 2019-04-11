import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleComplete} from '../actions/actions';

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    onClickHandler = _ => {
        this
            .props
            .toggleComplete(this.props.todo.value);
    }

    render() {
        return (
            <h1
                style={this.props.todo.complete
                ? {
                    color: 'green',
                    cursor: 'pointer',
                    marginTop: '50px'
                }
                : {
                    color: 'red',
                    cursor: 'pointer',
                    marginTop: '50px'
                }}
                onClick={this.onClickHandler}>
                {this.props.todo.value}
            </h1>
        )
    }
}

const mapStateToProps = state => {    
     return {todoList: state.todoList}
}

export default connect(mapStateToProps, {toggleComplete})(Todo)