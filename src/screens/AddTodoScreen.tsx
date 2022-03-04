import {Button, StyleSheet, TextInput, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackNavigatorParamList} from '../navigation/TodosStackNavigator';
import {RouteProp} from '@react-navigation/native';
import {TodosContext} from '../providers/TodoProvider';
import {TodoType} from '../types';
import {addTodoAction} from '../store/todos/actions';
import {ReduxStateType} from '../store/rootReducer';
import {useDispatch, useSelector} from 'react-redux';

type NavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamList,
  'AddTodo'
>;

type AddTodoScreenRouteProp = RouteProp<RootStackNavigatorParamList, 'AddTodo'>;

type Props = {
  route: AddTodoScreenRouteProp;
  navigation: NavigationProp;
};

const AddTodoScreen = ({navigation}: Props) => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const todos = useSelector((state: ReduxStateType) => state.todos.todos);
  const dispatch = useDispatch();

  // const {setTodos, todos} = useContext(TodosContext);

  // useEffect(() => {
  //   const contentArray = content.split(' ');
  //   if (contentArray.length > 10) {
  //     Alert.alert('Error', 'Excediste de numero de palabras');
  //     return;
  //   }
  // return () => webservice.cancel()
  // }, [content]);

  const addTodo = () => {
    const newTodo: TodoType = {id: todos.length, title, content};
    // setTodos([...todos, newTodo]);
    dispatch(addTodoAction(newTodo));
    navigation.goBack();
  };

  return (
    <View style={styles.content}>
      <TextInput
        style={styles.contentInput}
        value={title}
        onChangeText={setTitle}
        placeholder="Titulo"
        autoFocus={true}
      />
      <TextInput
        style={styles.contentInput}
        value={content}
        onChangeText={setContent}
        placeholder="Contenido"
        multiline
      />
      <Button title="Parent Function" onPress={addTodo} />
    </View>
  );
};

export default AddTodoScreen;

const styles = StyleSheet.create({
  content: {padding: 16},
  contentInput: {
    borderColor: 'silver',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 8,
  },
});
