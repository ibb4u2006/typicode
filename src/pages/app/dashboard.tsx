import PageHeader from '@/components/global/PageHeader';
import Dashboard from '@/components/sections/Dashboard';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@mui/material';

const DashboardPage = () => {
  const { logout } = useAuth();
  return (
    <>
      <PageHeader
        pageTitle={'Dashboard'}
        adornment={<Button onClick={logout}>Logout</Button>}
      />
      <Dashboard />
    </>
  );
};

export default DashboardPage;
