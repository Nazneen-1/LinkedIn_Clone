import apiClient from './apiClient';

// Get smart ranked feed
// This endpoint uses the engagement-based ranking system
export const getSmartFeed = async (params = {}) => {
  const response = await apiClient.get('/feed/smart', { params });
  return response;
};

// Get chronological feed (fallback)
export const getChronologicalFeed = async (params = {}) => {
  const response = await apiClient.get('/feed/chronological', { params });
  return response;
};

// Get feed with custom filters
export const getFilteredFeed = async (filters = {}) => {
  const response = await apiClient.get('/feed', { params: filters });
  return response;
};

// Get trending posts
export const getTrendingPosts = async (timeframe = '24h') => {
  const response = await apiClient.get('/feed/trending', {
    params: { timeframe },
  });
  return response;
};

// Get posts from connections only
export const getConnectionsFeed = async (params = {}) => {
  const response = await apiClient.get('/feed/connections', { params });
  return response;
};

// Mark post as seen (for engagement tracking)
export const markPostAsSeen = async (postId) => {
  const response = await apiClient.post(`/feed/posts/${postId}/seen`);
  return response;
};

// Report feed quality (for algorithm improvement)
export const reportFeedQuality = async (feedback) => {
  const response = await apiClient.post('/feed/feedback', feedback);
  return response;
};