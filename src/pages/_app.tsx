import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider as AlertProvider } from 'react-alert';
import Head from 'next/head';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { 
  faTimes, 
  faUser, 
  faEnvelope, 
  faPhoneAlt, 
  faExclamation, 
  faCheckDouble, 
  faInfo 
} from '@fortawesome/free-solid-svg-icons';

import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/themes/principal';

import Alert from '../components/general/Alert';

import { alertOptions } from '../store/hooks/useAlert';

library.add(fab, faTimes);
library.add(fab, faUser);
library.add(fab, faEnvelope);
library.add(fab, faPhoneAlt);
library.add(fab, faExclamation);
library.add(fab, faCheckDouble);
library.add(fab, faInfo);

export default function MyApp({ Component, pageProps }) {
  const AlertTemplate = ({ options, message, close }) => (
    <Alert 
      type={options.type}
      message={message}
      close={close}
    />
  )

  return (
    <>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
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
      </AlertProvider>
    </>
  )
}
