import { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../../config/firebase';
import { AuthContext } from './AuthContext';
import { useAuthUser } from '@react-query-firebase/auth';
import { GET_USER_QUERY } from '@/constants/queries';
import { useRouter } from 'next/router';
import { PUBLIC_ROUTES } from '@/constants/routes';
import LoadingSpinner from '@/components/global/LoadingSpinner';

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const {
    data: user,
    isLoading: isLoadingUser,
    isSuccess: isUserSuccess,
    error: userError,
  } = useAuthUser([GET_USER_QUERY], auth);

  const isLoading = isLoadingUser;

  useEffect(() => {
    if (user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [user]);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setIsAuth(false);
    await signOut(auth);
    router.push(PUBLIC_ROUTES.login);
  };

  return (
    <LoadingSpinner isLoading={isLoading}>
      <AuthContext.Provider
        value={{
          user,
          isLoading,
          login,
          signup,
          logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    </LoadingSpinner>
  );
};
