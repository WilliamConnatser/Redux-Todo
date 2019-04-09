import {ADD_TODO} from '../actions/actions';

const initialState = {
    todoList: [
        {
            value: "eat dinner",
            complete: false
        },
        {
            value: "code",
            complete: false
        },
        {
            value: "sleep",
            complete: false
        }
    ]
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return {
                todoList: [
                    ...state.todoList,
                    {
                        value: action.payload,
                        complete: false
                    }
                ]
            }
        default:
            return state;
    }
}