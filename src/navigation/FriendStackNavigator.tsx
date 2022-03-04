import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FriendsListScreen from '../screens/FriendsListScreen';

export type FriendsStackNavigatorParamList = {
  FriendsList: undefined;
};

const Stack = createNativeStackNavigator<FriendsStackNavigatorParamList>();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="FriendsList"
      component={FriendsListScreen}
      options={{title: 'Lista de amigos'}}
    />
  </Stack.Navigator>
);
