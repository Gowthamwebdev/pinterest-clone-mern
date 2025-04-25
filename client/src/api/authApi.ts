import { userType } from '../types/userTypes';
import apiClient from './apiClient';

export const userLoginApi = async ({ email, password }: userType) => {
  try {
    const response = await apiClient.post('/auth/login', { email, password });

    if (response.status !== 201) {
      throw new Error('Invalid credentials');
    }
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Login failed');
    } else {
      throw new Error('Something went wrong');
    }
  }
};
