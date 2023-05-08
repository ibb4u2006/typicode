export type PostResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostListPaginationControl = {
  _limit?: number;
  _page?: number;
  q?: string;
  total?: number;
};
