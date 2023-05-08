import { API_ROUTES } from '@/constants/routes';
import axiosClient from './axios';

export const getPosts = async () => {
  return await axiosClient.get(API_ROUTES.getPosts());
};

export const getPostView = async (id: string) => {
  return await axiosClient.get(API_ROUTES.getPostView(id));
};
