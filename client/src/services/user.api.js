import apiClient from './apiClient';

// Get user profile
export const getUserProfile = async (userId) => {
  const response = await apiClient.get(`/users/${userId}`);
  return response;
};

// Update user profile
export const updateUserProfile = async (userId, data) => {
  const response = await apiClient.put(`/users/${userId}`, data);
  return response;
};

// Upload profile image
export const uploadProfileImage = async (formData) => {
  const response = await apiClient.post('/users/profile-image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

// Get profile strength score and suggestions
export const getProfileStrength = async () => {
  const response = await apiClient.get('/users/profile-strength');
  return response;
};

// Get connection recommendations (AI-powered)
export const getRecommendations = async (params = {}) => {
  const response = await apiClient.get('/users/recommendations', { params });
  return response;
};

// Search users
export const searchUsers = async (query, filters = {}) => {
  const response = await apiClient.get('/users/search', {
    params: { q: query, ...filters },
  });
  return response;
};

// Get user connections
export const getUserConnections = async (userId) => {
  const response = await apiClient.get(`/users/${userId}/connections`);
  return response;
};

// Send connection request
export const sendConnectionRequest = async (userId) => {
  const response = await apiClient.post(`/users/${userId}/connect`);
  return response;
};

// Accept connection request
export const acceptConnectionRequest = async (requestId) => {
  const response = await apiClient.put(`/users/connections/${requestId}/accept`);
  return response;
};

// Reject connection request
export const rejectConnectionRequest = async (requestId) => {
  const response = await apiClient.put(`/users/connections/${requestId}/reject`);
  return response;
};

// Remove connection
export const removeConnection = async (userId) => {
  const response = await apiClient.delete(`/users/${userId}/connection`);
  return response;
};

// Get pending connection requests
export const getPendingRequests = async () => {
  const response = await apiClient.get('/users/connections/pending');
  return response;
};

// Add experience
export const addExperience = async (data) => {
  const response = await apiClient.post('/users/experience', data);
  return response;
};

// Update experience
export const updateExperience = async (experienceId, data) => {
  const response = await apiClient.put(`/users/experience/${experienceId}`, data);
  return response;
};

// Delete experience
export const deleteExperience = async (experienceId) => {
  const response = await apiClient.delete(`/users/experience/${experienceId}`);
  return response;
};

// Add education
export const addEducation = async (data) => {
  const response = await apiClient.post('/users/education', data);
  return response;
};

// Update education
export const updateEducation = async (educationId, data) => {
  const response = await apiClient.put(`/users/education/${educationId}`, data);
  return response;
};

// Delete education
export const deleteEducation = async (educationId) => {
  const response = await apiClient.delete(`/users/education/${educationId}`);
  return response;
};

// Add skill
export const addSkill = async (skill) => {
  const response = await apiClient.post('/users/skills', { skill });
  return response;
};

// Delete skill
export const deleteSkill = async (skillId) => {
  const response = await apiClient.delete(`/users/skills/${skillId}`);
  return response;
};