import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import Script from "next/script";
import withApollo from '../lib/with-apollo';
import '../styles.css';

export default function MyApp({ Component, pageProps }) {
  
  return (
  <ApolloProvider client={withApollo}>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      />
      <Component {...pageProps} />
  </ApolloProvider>);
}