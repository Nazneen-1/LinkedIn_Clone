import apiClient from './apiClient';

// Create post
export const createPost = async (postData) => {
  const response = await apiClient.post('/posts', postData);
  return response;
};

// Get single post
export const getPost = async (postId) => {
  const response = await apiClient.get(`/posts/${postId}`);
  return response;
};

// Update post
export const updatePost = async (postId, data) => {
  const response = await apiClient.put(`/posts/${postId}`, data);
  return response;
};

// Delete post
export const deletePost = async (postId) => {
  const response = await apiClient.delete(`/posts/${postId}`);
  return response;
};

// Toggle like on post
export const toggleLike = async (postId) => {
  const response = await apiClient.post(`/posts/${postId}/like`);
  return response;
};

// Get post likes
export const getPostLikes = async (postId) => {
  const response = await apiClient.get(`/posts/${postId}/likes`);
  return response;
};

// Add comment to post
export const addComment = async (postId, content) => {
  const response = await apiClient.post(`/posts/${postId}/comments`, { content });
  return response;
};

// Get post comments
export const getPostComments = async (postId) => {
  const response = await apiClient.get(`/posts/${postId}/comments`);
  return response;
};

// Delete comment
export const deleteComment = async (postId, commentId) => {
  const response = await apiClient.delete(`/posts/${postId}/comments/${commentId}`);
  return response;
};

// Share/Repost
export const sharePost = async (postId, content = '') => {
  const response = await apiClient.post(`/posts/${postId}/share`, { content });
  return response;
};

// Upload post image
export const uploadPostImage = async (formData) => {
  const response = await apiClient.post('/posts/upload-image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

// Get user posts
export const getUserPosts = async (userId, params = {}) => {
  const response = await apiClient.get(`/posts/user/${userId}`, { params });
  return response;
};