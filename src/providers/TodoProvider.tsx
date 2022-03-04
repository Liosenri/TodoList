import React, {createContext, useState} from 'react';
import {TodoType} from '../types';

interface Props {
  children: React.ReactNode;
}

interface TodoContextType {
  todos: TodoType[];
  setTodos: (todos: TodoType[]) => void;
}

export const TodosContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => {},
});

export const TodoProvider = ({children}: Props) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const {Provider} = TodosContext;

  return <Provider value={{todos, setTodos}}>{children}</Provider>;
};
