import {combineReducers} from 'redux';
import todosReducer from './todos/reducer';
import friendsReducer from './friends/reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  friends: friendsReducer,
});

export type ReduxStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
