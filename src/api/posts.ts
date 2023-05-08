import { API_ROUTES } from '@/constants/routes';
import axiosClient from './axios';
import { AxiosResponse } from 'axios';
import { PostListPaginationControl, PostResponse } from '@/domains/response';

export const getPosts = async (
  pagination: PostListPaginationControl
): Promise<AxiosResponse<PostResponse[]>> => {
  return await axiosClient.get(API_ROUTES.getPosts(), { params: pagination });
};

export const getPostView = async (
  id: string
): Promise<AxiosResponse<PostResponse>> => {
  return await axiosClient.get(API_ROUTES.getPostView(id));
};
