import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/actions';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    onChangeHandler = event => {
        this.setState({
            value: event.target.value
        })
    }

    onSubmitHandler = event => {
        event.preventDefault();
        this.props.addTodo(this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <h2>Add a todo...</h2>
                <input onChange={this.onChangeHandler} value={this.state.value}></input>
                <button type="submit">Add Todo</button>
            </form>
        )
    }
}

const mapStateToProps = _ => {
    return {};
}

export default connect(mapStateToProps, {addTodo})(Form);