import {ADD_TODO, TOGGLE_COMPLETE} from '../actions/actions';

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
        case TOGGLE_COMPLETE:
            const todoIndex = state.todoList.findIndex(todo => todo.value === action.payload);
            const newList = state.todoList.slice();
            newList[todoIndex].complete = !newList[todoIndex].complete;
            return {
                ...state,
                todoList: newList
            }
        default:
            return state;
    }
}