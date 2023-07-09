import type { AppProps } from 'next/app'
import client from '../lib/apolloClient';
import { ApolloProvider } from '@apollo/client';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/styles/global';
import { theme } from '@/styles/theme';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}
