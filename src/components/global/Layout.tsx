import { Container } from '@mui/material';
import Head from 'next/head';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Typicode App</title>
        <meta name="description" content="Typicode app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="md" sx={{ height: '100vh' }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
