import { getPostView, getPosts } from '@/api/posts';
import { GET_POSTS_QUERY, GET_POST_VIEW_QUERY } from '@/constants/queries';
import { PostListPaginationControl } from '@/domains/response';
import { useQuery } from 'react-query';

export const useGetPosts = (params?: PostListPaginationControl) => {
  return useQuery([GET_POSTS_QUERY], async () => getPosts({ ...params }));
};

export const useGetPostView = (id: string) => {
  return useQuery([GET_POST_VIEW_QUERY], async () => getPostView(id));
};
