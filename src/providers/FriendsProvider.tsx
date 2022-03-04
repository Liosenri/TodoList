import React, {createContext, useState} from 'react';

interface Props {
  children: React.ReactNode;
}

interface TodoContextType {
  friends: string[];
  setFriends: (friends: string[]) => void;
}

export const FriendsContext = createContext<TodoContextType>({
  friends: [],
  setFriends: () => {},
});

export const FriendsProvider = ({children}: Props) => {
  const [friends, setFriends] = useState<string[]>([
    'Luis',
    'Liz',
    'Bustos',
    'Javier',
    'Karina',
    'Mateo',
    'Arturo',
  ]);
  const {Provider} = FriendsContext;

  return <Provider value={{friends, setFriends}}>{children}</Provider>;
};
