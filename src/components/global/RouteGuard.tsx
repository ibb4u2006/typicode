import { PUBLIC_ROUTES } from '@/constants/routes';
import { useAuth } from '@/hooks/useAuth';
import { isPrivateRoute } from '@/utils/auth';
import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

const RouteGuard = ({ children }: { children: React.ReactNode }) => {
  const [isAllowed, setIsAllowed] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const isPrivatePath = isPrivateRoute(router.pathname);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    const checkAuth = () => {
      if (!user && isPrivatePath) {
        setIsAllowed(false);
        router.replace('/login');
      } else {
        setIsAllowed(true);
      }
    };

    checkAuth();
  }, [router.route]);

  return <LoadingSpinner isLoading={!isAllowed}>{children}</LoadingSpinner>;
};

export default RouteGuard;
