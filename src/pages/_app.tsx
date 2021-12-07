import React from 'react';
import { ThemeProvider } from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faUser, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/themes/principal';
import Head from 'next/head';

library.add(fab, faTimes);
library.add(fab, faUser);
library.add(fab, faEnvelope);
library.add(fab, faPhoneAlt);

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
