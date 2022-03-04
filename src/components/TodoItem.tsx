import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {TodoType} from '../types';
import {TodosContext} from '../providers/TodoProvider';
import {useDispatch, useSelector} from 'react-redux';
import {ReduxStateType} from '../store/rootReducer';
import {removeTodoAction} from '../store/todos/actions';

type Props = {
  todo: TodoType;
};

const TodoItem = ({todo: {title, content, id}}: Props) => {
  // const {setTodos, todos} = useContext(TodosContext); con context
  const dispatch = useDispatch();

  const deleteTodo = () => {
    // setTodos(todos.filter(todo => id !== todo.id));
    dispatch(removeTodoAction(id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContent}>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
        <Text>{content}</Text>
      </View>
      <Button title="Borrar" onPress={deleteTodo} />
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  title: {fontWeight: 'bold', fontSize: 20},
  container: {padding: 10, flexDirection: 'row'},
  textContent: {flex: 1},
});
