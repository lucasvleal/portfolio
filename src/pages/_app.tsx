import React from 'react';
import { ThemeProvider } from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/themes/principal';

library.add(fab, faTimes);

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
