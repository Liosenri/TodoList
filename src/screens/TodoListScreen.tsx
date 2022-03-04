import {Button, StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import {TodoType} from '../types';
import TodoList from '../components/TodoList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackNavigatorParamList} from '../navigation/TodosStackNavigator';
import {TodosContext} from '../providers/TodoProvider';
import {useSelector} from 'react-redux';
import {ReduxStateType} from '../store/rootReducer';

type NavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamList,
  'TodoList'
>;

type Props = {
  navigation: NavigationProp;
};

const TodoListScreen = ({navigation}: Props) => {
  // const {todos} = useContext(TodosContext); usando context
  const todos = useSelector((state: ReduxStateType) => state.todos.todos); // Con redux

  // const addTodo = (title: string, content: string) => {
  //   const newTodo: TodoType = {id: todos.length, title, content};
  //   setTodos([...todos, newTodo]);
  // };

  return (
    <View>
      <TodoList todos={todos} />
      <Button
        title="Agregar tarea"
        // onPress={() => navigation.navigate('AddTodo', {addTodo})} // before TodoProvider
        onPress={() => navigation.navigate('AddTodo')} // before TodoProvider
      />
    </View>
  );
};

export default TodoListScreen;

const styles = StyleSheet.create({});
