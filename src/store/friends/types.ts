import {ADD_FRIEND, REMOVE_FRIEND} from './actionTypes';
export type FriendType = {
  name: string;
};

export type FriendReducerType = {
  friends: FriendType[];
};

export type AddFriendPayloadType = {
  friend: FriendType;
};

export type AddFriendActionType = {
  type: typeof ADD_FRIEND;
  payload: AddFriendPayloadType;
};

export type RemoveFriendPayloadType = {
  name: string;
};

export type RemoveFriendActionType = {
  type: typeof REMOVE_FRIEND;
  payload: RemoveFriendPayloadType;
};

export type FriendsActions = AddFriendActionType | RemoveFriendActionType;
