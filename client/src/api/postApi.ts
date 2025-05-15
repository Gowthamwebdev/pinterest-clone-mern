import { postState } from '../types/postTypes';
import apiClient from './apiClient';

export const createPost = async (
    postData: postState & {
    image: File | Blob;
    },
) => {
    try {
    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('description', postData.description);
    formData.append('tags', postData.tags);
    // formData.append('board', postData.board);
    formData.append('image', postData.image);

    const response = await apiClient.post('/posts', formData, {
        headers: {
        'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
    } catch (error) {
    console.error('Error creating post:', error);
    throw error;
    }
};

export const getPosts = async () => {
    try {
    const response = await apiClient.get('/posts');
    return response.data;
    } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
    }
};

export const getPostById = async (postId: string) => {
    try {
    const response = await apiClient.get(`/posts/${postId}`);
    return response.data;
    } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
    }
};

export const savePost = async (postId: string) => {
    try {
    const response = await apiClient.post(`/posts/${postId}/save`);
    return response.data;
    } catch (error) {
    console.error('Error saving post:', error);
    throw error;
    }
};