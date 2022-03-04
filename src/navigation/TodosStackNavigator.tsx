import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoListScreen from '../screens/TodoListScreen';
import AddTodoScreen from '../screens/AddTodoScreen';

export type RootStackNavigatorParamList = {
  TodoList: undefined;
  // AddTodo: {addTodo: (title: string, content: string) => void}; before todoprovider
  AddTodo: undefined;
};

const Stack = createNativeStackNavigator<RootStackNavigatorParamList>();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TodoList"
      component={TodoListScreen}
      options={{title: 'Lista de tareas'}}
    />
    <Stack.Screen
      name="AddTodo"
      component={AddTodoScreen}
      options={{title: 'Agregar tarea'}}
    />
  </Stack.Navigator>
);
