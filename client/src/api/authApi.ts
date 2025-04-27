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

  export const userSignupApi = async (userData: userType) => {
    try {
      const response = await apiClient.post('/auth/signup', userData);

      if (response.status !== 201) {
        throw new Error('Signup failed');
      }

      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(error.response.data.message || 'Signup failed');
      } else {
        throw new Error('Something went wrong');
      }
    }
  };
