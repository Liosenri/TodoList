import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {FriendsContext} from '../providers/FriendsProvider';
import {useDispatch, useSelector} from 'react-redux';
import {ReduxStateType} from '../store/rootReducer';
import {FriendType} from '../store/friends/types';
import {addFriendAction, removeFriendAction} from '../store/friends/actions';

type Props = {};

const FriendsListScreen = ({}: Props) => {
  // const {friends} = useContext(FriendsContext);
  const friends = useSelector((state: ReduxStateType) => state.friends.friends); // Con redux
  const [friend, setFriend] = useState('');
  const dispatch = useDispatch();

  const addFriend = () => {
    const newFriend: FriendType = {name: friend};
    // setTodos([...todos, newTodo]);
    dispatch(addFriendAction(newFriend));
    setFriend('');
  };

  const removeFriend = (name: string) => {
    dispatch(removeFriendAction(name));
  };

  return (
    <View>
      <View>
        <TextInput value={friend} onChangeText={setFriend} />
        <Button title="Agregar" onPress={addFriend} />
      </View>
      <ScrollView>
        {friends.map((item, index) => (
          <View key={index} style={styles.item}>
            <Image
              style={styles.profilePicture}
              source={{
                uri: `https://randomuser.me/api/portraits/men/${index}.jpg`,
              }}
            />
            <Text>{item.name}</Text>
            <Button title="Borrar" onPress={() => removeFriend(item.name)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FriendsListScreen;

const styles = StyleSheet.create({
  profilePicture: {height: 44, width: 44, borderRadius: 22, marginRight: 16},
  item: {flexDirection: 'row', alignItems: 'center', padding: 10},
});
