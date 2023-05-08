export const PUBLIC_ROUTES = {
  home: '/',
  login: '/login',
};

export const PROTECTED_ROUTES = {
  dashboard: '/app/dashboard',
};

export const API_ROUTES = {
  getPosts: () => `/posts`,
  getPostView: (id: string) => `/posts/${id}`,
};
