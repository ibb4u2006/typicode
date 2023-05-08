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
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoadingSpinner from '@/components/global/LoadingSpinner';
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

// Create a client
const queryClient = new QueryClient();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { events } = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    events.on('routeChangeStart', () => setIsLoading(true));
    events.on('routeChangeComplete', () => setIsLoading(false));
    events.on('routeChangeError', () => setIsLoading(false));
    return () => {
      events.off('routeChangeStart', () => setIsLoading(true));
      events.off('routeChangeComplete', () => setIsLoading(false));
      events.off('routeChangeError', () => setIsLoading(false));
    };
  }, [events]);

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <AuthContextProvider>
            <RouteGuard>
              <LoadingSpinner isLoading={isLoading}>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </LoadingSpinner>
            </RouteGuard>
          </AuthContextProvider>
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
