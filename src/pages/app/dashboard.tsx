import { useAuth } from '@/hooks/useAuth';
import { Button } from '@mui/material';

const DashboardPage = () => {
  const { logout } = useAuth();
  return (
    <>
      This is dashboard page <Button onClick={logout}>Logout</Button>
    </>
  );
};

export default DashboardPage;
