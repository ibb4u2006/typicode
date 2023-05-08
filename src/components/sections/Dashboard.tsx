import { Grid } from '@mui/material';
import PostList from './PostList';
import TabsNav from '../global/Tabs';
import UserProfile from './UserProfile';

const Dashboard = () => {
  return (
    <Grid container alignItems="start" gap={5}>
      <TabsNav
        tabs={[
          { id: 'post-list', title: 'Posts', body: <PostList /> },
          {
            id: 'user-profile',
            title: 'Profile',
            body: <UserProfile />,
          },
        ]}
      />
    </Grid>
  );
};

export default Dashboard;
