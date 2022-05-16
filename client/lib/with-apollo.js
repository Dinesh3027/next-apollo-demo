import { withData } from 'next-apollo'
import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloConfig = new ApolloClient({
  uri: 'http://localhost:4500/graphql',
  cache: new InMemoryCache()
});

export default apolloConfig
