import { getPostView, getPosts } from '@/api/posts';
import { GET_POSTS_QUERY, GET_POST_VIEW_QUERY } from '@/constants/queries';
import { useQuery } from 'react-query';

export const useGetPosts = () => {
  return useQuery([GET_POSTS_QUERY], async () => getPosts());
};

export const useGetPostView = (id: string) => {
  return useQuery([GET_POST_VIEW_QUERY], async () => getPostView(id));
};
