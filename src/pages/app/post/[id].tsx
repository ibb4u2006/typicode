import LoadingSpinner from '@/components/global/LoadingSpinner';
import PageHeader from '@/components/global/PageHeader';
import { useAuth } from '@/hooks/useAuth';
import { useGetPostView } from '@/hooks/usePosts';
import { Button } from '@mui/material';

type PostViewProps = {
  id: string;
};

const PostView: React.FC<PostViewProps> = ({ id }) => {
  const { data, isLoading } = useGetPostView(id);
  const { logout } = useAuth();
  return (
    <LoadingSpinner isLoading={isLoading}>
      <PageHeader
        backUrl="/app/dashboard"
        pageTitle={data?.data.title ?? ''}
        adornment={<Button onClick={logout}>Logout</Button>}
      />
      {data?.data.body}
    </LoadingSpinner>
  );
};

export const getServerSideProps = async ({ query }: any) => {
  const id = query?.id;

  return {
    props: {
      id,
    },
  };
};

export default PostView;
