import { Container, Grid } from '@mui/material';
import { FC, useContext, useEffect } from 'react';
import React from 'react';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import { AuthContext } from '@/context/auth/AuthContext';
import { useRouter } from 'next/router';
import { PROTECTED_ROUTES } from '@/constants/routes';

const LoginPage: FC = () => {
  const router = useRouter();
  const { isAuth } = useContext(AuthContext);
  useEffect(() => {
    if (isAuth) {
      router.push(PROTECTED_ROUTES.dashboard);
    }
  }, [isAuth, router]);
  return (
    <Container
      maxWidth={false}
      sx={{ height: '100vh', backgroundColor: { xs: '#fff', md: '#f4f4f4' } }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ width: '100%', height: '100%' }}
      >
        <Grid
          item
          sx={{ maxWidth: '60rem', width: '100%', backgroundColor: '#fff' }}
        >
          <Grid
            container
            sx={{
              boxShadow: { sm: '0 0 5px #ddd' },
              p: '3rem',
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                borderRight: { sm: '1px solid #ddd' },
                paddingRight: { md: '3rem' },
              }}
            >
              <LoginForm />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                paddingLeft: { md: '3rem' },
              }}
            >
              <RegisterForm />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
