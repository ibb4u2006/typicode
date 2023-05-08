import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { PUBLIC_ROUTES } from '@/constants/routes';
import LoadingSpinner from '@/components/global/LoadingSpinner';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push(PUBLIC_ROUTES.login);
  }, []);
  return (
    <LoadingSpinner isLoading>
      <></>
    </LoadingSpinner>
  );
}
