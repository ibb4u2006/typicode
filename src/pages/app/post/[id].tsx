import LoadingSpinner from '@/components/global/LoadingSpinner';
import PageHeader from '@/components/global/PageHeader';
import { useGetPostView } from '@/hooks/usePosts';

type PostViewProps = {
  id: string;
};

const PostView: React.FC<PostViewProps> = ({ id }) => {
  const { data, isLoading } = useGetPostView(id);
  return (
    <LoadingSpinner isLoading={isLoading}>
      <PageHeader backUrl="/app/dashboard" pageTitle={data?.data.title} />
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
