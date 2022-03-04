import {ADD_FRIEND, REMOVE_FRIEND} from './actionTypes';
import {FriendsActions, FriendReducerType} from './types';

const initialState: FriendReducerType = {
  friends: [{name: 'Roberto'}],
};

export default (
  state = initialState,
  action: FriendsActions,
): FriendReducerType => {
  switch (action.type) {
    case ADD_FRIEND:
      return {friends: [...state.friends, action.payload.friend]};
    case REMOVE_FRIEND:
      return {
        friends: state.friends.filter(
          friend => friend.name !== action.payload.name,
        ),
      };
    default:
      return state;
  }
};
