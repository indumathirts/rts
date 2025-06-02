// src/api/users.ts
import axios from 'axios';

export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  mobile: string;
  addressLine1: string;
  addressLine2?: string;
  sector?: string;
  pincode?: string;
  city: string;
  district?: string;
  state?: string;
  createdAt: string;
}


const BASE_URL = import.meta.env.VITE_API_URL || 'http://192.168.0.173:3000';

export const fetchUsers = async (): Promise<User[]> => {
  const res = await axios.get(`${BASE_URL}/users`);
  return res.data;
};

export const createUser = async (userData: any): Promise<User> => {
  const res = await axios.post(`${BASE_URL}/users`, userData);
  return res.data;
};
export const updateUser = async (id: number, userData: Partial<User>) => {
  const response = await axios.put(`${BASE_URL}/users/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/users/${id}`);
  return response.data;
};
// Fetch a user by ID
export const fetchUserById = async (id: number): Promise<User> => {
  const response = await axios.get(`${BASE_URL}/users/${id}`);
  return response.data;
};
