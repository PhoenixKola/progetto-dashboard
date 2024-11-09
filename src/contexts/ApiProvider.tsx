import React, { ReactNode } from 'react';
import { ApiContext } from './ApiContext';
import { User } from '../utils/types';
import { useApi } from '../hooks/useApi';

const ApiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const {
    users,
    posts,
    photos,
    loading,
    error,
    setUsers,
    setPosts
  } = useApi();

  const addUser = (newUser: User) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const editUser = (id: number, newName: string, newEmail: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, name: newName, email: newEmail } : user
      )
    );
  };

  const deleteUser = (userId: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    setPosts((prevPosts) => prevPosts.filter((post) => post.userId !== userId));
  };

  return (
    <ApiContext.Provider
      value={{
        users,
        posts,
        photos,
        loading,
        error,
        addUser,
        editUser,
        deleteUser,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
