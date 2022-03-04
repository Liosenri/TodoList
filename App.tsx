// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TodoProvider} from './src/providers/TodoProvider';
import RootTabNavigator from './src/navigation/RootTabNavigator';
import {FriendsProvider} from './src/providers/FriendsProvider';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/store';

function App() {
  return (
    <ReduxProvider store={store}>
      <FriendsProvider>
        <TodoProvider>
          <NavigationContainer>
            <RootTabNavigator />
          </NavigationContainer>
        </TodoProvider>
      </FriendsProvider>
    </ReduxProvider>
  );
}

export default App;
