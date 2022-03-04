import {ADD_TODO, REMOVE_TODO} from './actionTypes';
export type TodoType = {
  id: number;
  title: string;
  content: string;
};

export type TodosReducerType = {
  todos: TodoType[];
};

export type AddTodoPayloadType = {
  todo: TodoType;
};

export type AddTodoActionType = {
  type: typeof ADD_TODO;
  payload: AddTodoPayloadType;
};

export type RemoveTodoPayloadType = {
  id: number;
};

export type RemoveTodoActionType = {
  type: typeof REMOVE_TODO;
  payload: RemoveTodoPayloadType;
};

export type TodosActions = AddTodoActionType | RemoveTodoActionType;
