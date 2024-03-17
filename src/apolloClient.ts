import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_SPACE_ID}?access_token=${import.meta.env.VITE_SPACE_TOKEN}`,
    cache: new InMemoryCache(),
});

export default client;
