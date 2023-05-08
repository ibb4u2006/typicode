import { useGetPosts } from '@/hooks/usePosts';
import { Grid, Card, Box, Link, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

interface CellType {
  row: Record<string, string>;
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
  const { data, isLoading, error } = useGetPosts();
  const posts = (data?.data ?? []) as Record<string, string>[];

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <DataGrid
            autoHeight
            rows={posts}
            columns={columns}
            loading={isLoading}
            // page={0}
            // rowCount={10}
            // pageSize={10}
            // disableSelectionOnClick
            // rowsPerPageOptions={[15, 25, 50]}
            sx={{
              '& .MuiDataGrid-columnHeaders': { borderRadius: 0 },
              padding: '1rem',
            }}
            // onPageSizeChange={(newPageSize: number) =>
            //   'setPageSize(newPageSize)'
            // }
            // onPageChange={(newPage: number) => 'setPage(newPage + 1)'}
            paginationMode="server"
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default PostList;
