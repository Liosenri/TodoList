import {View} from 'react-native';
import React from 'react';
import {TodoType} from '../types';
import TodoItem from './TodoItem';

type Props = {
  todos: TodoType[];
};

const TodoList = ({todos}: Props) => {
  return (
    <View>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </View>
  );
};

export default TodoList;
