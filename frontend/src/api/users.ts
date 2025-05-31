// src/api/users.ts
import axios from 'axios';

export type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
};

const BASE_URL = import.meta.env.VITE_API_URL || 'http://192.168.0.173:3000';

export const fetchUsers = async (): Promise<User[]> => {
  const res = await axios.get(`${BASE_URL}/users`);
  return res.data;
};

export const createUser = async (userData: any): Promise<User> => {
  const res = await axios.post(`${BASE_URL}/users`, userData);
  return res.data;
};
