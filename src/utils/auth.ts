import { PROTECTED_ROUTES, PUBLIC_ROUTES } from '@/constants/routes';

export const isPrivateRoute = (pathname: string) =>
  Object.values(PROTECTED_ROUTES).includes(pathname);
export const isPublicRoute = (pathname: string) =>
  Object.values(PUBLIC_ROUTES).includes(pathname);
