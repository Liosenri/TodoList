import {ADD_TODO, REMOVE_TODO} from './actionTypes';
import {TodosActions, TodosReducerType} from './types';

const initialState: TodosReducerType = {
  todos: [],
};

export default (
  state = initialState,
  action: TodosActions,
): TodosReducerType => {
  switch (action.type) {
    case ADD_TODO:
      return {todos: [...state.todos, action.payload.todo]};
    case REMOVE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};
