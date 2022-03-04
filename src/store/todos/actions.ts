import {TodoType} from './types';
import {ADD_TODO, REMOVE_TODO} from './actionTypes';
import {AddTodoActionType, RemoveTodoActionType} from './types';

export const addTodoAction = (todo: TodoType): AddTodoActionType => ({
  type: ADD_TODO,
  payload: {todo},
});

export const removeTodoAction = (id: number): RemoveTodoActionType => ({
  type: REMOVE_TODO,
  payload: {id},
});
