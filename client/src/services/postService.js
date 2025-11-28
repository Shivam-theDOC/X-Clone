import apiClient from './apiService';

/**
 * Post Service - Handles all post-related API calls
 */

// Get all posts for feed
export const getPosts = async () => {
    try {
        const response = await apiClient.get('/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

// Get posts filtered by tab (For you / Following)
export const getPostsByTab = async (tab = 'for-you') => {
    try {
        const response = await apiClient.get(`/posts?tab=${tab}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts by tab:', error);
        throw error;
    }
};

// Create a new post
export const createPost = async (postData) => {
    try {
        const response = await apiClient.post('/posts/create', postData);
        return response.data;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
};

// Like/unlike a post
export const likePost = async (postId) => {
    try {
        const response = await apiClient.post(`/posts/${postId}/like`);
        return response.data;
    } catch (error) {
        console.error('Error liking post:', error);
        throw error;
    }
};

// Retweet a post
export const retweetPost = async (postId) => {
    try {
        const response = await apiClient.post(`/posts/${postId}/retweet`);
        return response.data;
    } catch (error) {
        console.error('Error retweeting post:', error);
        throw error;
    }
};

// Comment on a post
export const commentOnPost = async (postId, commentData) => {
    try {
        const response = await apiClient.post(`/posts/${postId}/comment`, commentData);
        return response.data;
    } catch (error) {
        console.error('Error commenting on post:', error);
        throw error;
    }
};

// Bookmark/unbookmark a post
export const bookmarkPost = async (postId) => {
    try {
        const response = await apiClient.post(`/posts/${postId}/bookmark`);
        return response.data;
    } catch (error) {
        console.error('Error bookmarking post:', error);
        throw error;
    }
};

// Delete a post
export const deletePost = async (postId) => {
    try {
        const response = await apiClient.delete(`/posts/${postId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting post:', error);
        throw error;
    }
};

// Get post by ID
export const getPostById = async (postId) => {
    try {
        const response = await apiClient.get(`/posts/${postId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching post:', error);
        throw error;
    }
};
