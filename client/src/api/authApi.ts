import { userType } from '../types/userTypes';
import apiClient from './apiClient';

const handleApiError = (error: any) => {
  if (error.response) {
    
    return new Error(error.response.data.message || 'Something went wrong');
  } else if (error.request) {

    return new Error('No response from server');
  } else {
    
    return new Error(error.message || 'An error occurred');
  }
};


export const userLoginApi = async ({ email, password }: { email: string; password: string }) => {
  try {
    const response = await apiClient.post('/auth/login', { email, password });

    if (response.status !== 200) {
      throw new Error('Invalid credentials');
    }

    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};


export const fetchUserProfileApi = async () => {
  try {
    const response = await apiClient.get('/auth/profile');
    return response.data;
  } catch (error: any) {
    throw handleApiError(error);
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
    throw handleApiError(error);
  }
};


export const resetPasswordApi = async (email: string, newPassword: string) => {
  try {
    const response = await apiClient.post('/auth/reset-password', { email, newPassword });

    if (response.status !== 200) {
      throw new Error('Failed to reset password');
    }

    return response.data;
  } catch (error: any) {
    throw handleApiError(error);
  }
};
