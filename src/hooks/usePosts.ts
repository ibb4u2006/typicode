import { getPosts } from '@/api/posts';
import { GET_POSTS_QUERY } from '@/constants/queries';
import { useQuery } from 'react-query';

export const useGetPosts = () => {
  return useQuery([GET_POSTS_QUERY], async () => getPosts());
};
