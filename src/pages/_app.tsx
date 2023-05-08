import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import createEmotionCache from '../utils/createEmotionCache';
import lightThemeOptions from '../styles/theme/lightThemeOptions';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthContextProvider } from '@/context/auth/AuthContextProvider';
import RouteGuard from '@/components/global/RouteGuard';
import Layout from '@/components/global/Layout';
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

// Create a client
const queryClient = new QueryClient();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <AuthContextProvider>
            <RouteGuard>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </RouteGuard>
          </AuthContextProvider>
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
