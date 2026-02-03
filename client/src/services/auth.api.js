import apiClient from './apiClient';

export const login = async (email, password) => {
  const response = await apiClient.post('/auth/login', { email, password });
  return response;
};

export const register = async (userData) => {
  const response = await apiClient.post('/auth/register', userData);
  return response;
};

export const logout = async () => {
  const response = await apiClient.post('/auth/logout');
  return response;
};

export const getCurrentUser = async () => {
  const response = await apiClient.get('/auth/me');
  return response;
};

export const refreshToken = async () => {
  const response = await apiClient.post('/auth/refresh');
  return response;
};

export const forgotPassword = async (email) => {
  const response = await apiClient.post('/auth/forgot-password', { email });
  return response;
};

export const resetPassword = async (token, password) => {
  const response = await apiClient.post('/auth/reset-password', {
    token,
    password,
  });
  return response;
};