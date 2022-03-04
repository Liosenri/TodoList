import {FriendType} from './types';
import {ADD_FRIEND, REMOVE_FRIEND} from './actionTypes';
import {AddFriendActionType, RemoveFriendActionType} from './types';

export const addFriendAction = (friend: FriendType): AddFriendActionType => ({
  type: ADD_FRIEND,
  payload: {friend},
});

export const removeFriendAction = (name: string): RemoveFriendActionType => ({
  type: REMOVE_FRIEND,
  payload: {name},
});
