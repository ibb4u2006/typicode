import { Grid } from '@mui/material';
import PostList from './PostList';
import TabsNav from '../global/Tabs';

const Dashboard = () => {
  return (
    <Grid container alignItems="start" gap={5}>
      <TabsNav
        tabs={[
          { id: 'post-list', title: 'Posts', body: <PostList /> },
          {
            id: 'user-profile',
            title: 'Profile',
            body: <>User Profile here</>,
          },
        ]}
      />
    </Grid>
  );
};

export default Dashboard;
