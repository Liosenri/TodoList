import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FriendStackNavigator from './FriendStackNavigator';
import TodosStackNavigator from './TodosStackNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type RootTabParamsListType = {
  TodosStack: undefined;
  FriendStack: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamsListType>();

export default () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen
      component={TodosStackNavigator}
      name="TodosStack"
      options={{
        title: 'Tareas',
        tabBarIcon: props => <Icon name="format-list-checks" {...props} />,
      }}
    />
    <Tab.Screen
      component={FriendStackNavigator}
      name="FriendStack"
      options={{
        title: 'Amigos',
        tabBarIcon: props => <Icon name="account-group" {...props} />,
      }}
    />
  </Tab.Navigator>
);
