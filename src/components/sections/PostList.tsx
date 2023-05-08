import { PostResponse } from '@/domains/response';
import { useGetPosts } from '@/hooks/usePosts';
import { Search } from '@mui/icons-material';
import { Grid, Card, Box, Link, Typography, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { ChangeEvent, useEffect, useState } from 'react';

interface CellType {
  row: PostResponse;
}

type Column = {
  field: string;
  headerName: string;
  renderCell: ({ row }: CellType) => JSX.Element;
};

export const columns = [
  {
    field: 'postId',
    headerName: 'Post Id',
    renderCell: ({ row }: CellType) => {
      const postId = row?.id;

      return (
        <Typography noWrap sx={{ textDecoration: 'none' }}>
          {postId}
        </Typography>
      );
    },
  },
  {
    flex: 1,
    field: 'title',
    headerName: 'Title',
    renderCell: ({ row }: CellType) => {
      const postTitle = row?.title;
      const postId = row?.id;
      return (
        <Link href={`/app/post/${postId}`}>
          <Typography noWrap sx={{ textDecoration: 'none' }}>
            {postTitle}
          </Typography>
        </Link>
      );
    },
  },
] as Column[];

const PostList = () => {
  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>();

  const { data, isLoading, refetch } = useGetPosts({
    _page: page,
    _limit: pageSize,
    q: search,
  });

  const posts = data?.data ?? [];
  const totalPost = data?.headers['x-total-count'];

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    refetch();
  }, [page, search, pageSize]);

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Box display="flex" width="100%" justifyContent="end">
          <TextField
            type="search"
            label="Search Post"
            sx={{
              marginBottom: '1.5rem',
            }}
            InputProps={{
              endAdornment: <Search />,
            }}
            onChange={handleSearch}
          />
        </Box>
        <Card>
          <DataGrid
            autoHeight
            rows={posts}
            columns={columns}
            loading={isLoading}
            rowCount={Number(totalPost ?? 0)}
            page={page - 1}
            pageSize={pageSize}
            rowsPerPageOptions={[10, 20, 50]}
            filterMode="server"
            sx={{
              '& .MuiDataGrid-columnHeaders': { borderRadius: 0 },
              padding: '1rem',
            }}
            onPageSizeChange={(newPageSize: number) => setPageSize(newPageSize)}
            onPageChange={(newPage: number) => setPage(newPage + 1)}
            paginationMode="server"
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default PostList;
