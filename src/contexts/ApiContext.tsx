import { createContext, useContext } from 'react';
import { User, Post, Photo } from '../utils/types';

interface ApiContextType {
    users: User[];
    posts: Post[];
    photos: Photo[];
    loading: boolean;
    error: string | null;
    addUser: (newUser: User) => void;
    editUser: (id: number, newName: string, newEmail: string) => void;
    deleteUser: (userId: number) => void;
}

export const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const useApiContext = (): ApiContextType => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApiContext must be used within an ApiProvider');
  }
  return context;
};
