import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache,HttpLink } from '@apollo/client';

export const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://wnvhe4x7trhnxmrm7kxpnmarja.appsync-api.eu-west-1.amazonaws.com/graphql',
       fetch, 
       headers: {
        "x-api-key": "da2-q4dpf4hkvjci7d5i7eynd5jcou", // ENTER YOUR API KEY HERE
      },
    }),
    cache: new InMemoryCache()
})