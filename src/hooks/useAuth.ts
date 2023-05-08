import { auth } from '@/config/firebase';
import { AuthContext } from '@/context/auth/AuthContext';
import {
  useAuthCreateUserWithEmailAndPassword,
  useAuthSignInWithEmailAndPassword,
} from '@react-query-firebase/auth';
import { useContext } from 'react';

export const useAuth = () => useContext(AuthContext);

export const useSignIn = () => {
  return useAuthSignInWithEmailAndPassword(auth);
};

export const useRegister = () => {
  return useAuthCreateUserWithEmailAndPassword(auth);
};
