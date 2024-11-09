import { useState, useEffect } from 'react';
import { User, Post, Photo } from '../utils/types';
import axios from 'axios';

export const useApi = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (err) {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=20');
        setPhotos(response.data);
      } catch (err) {
        setError('Failed to fetch photos');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return {
    users,
    posts,
    photos,
    loading,
    error,
    setUsers,
    setPosts,
    setPhotos,
  };
};
