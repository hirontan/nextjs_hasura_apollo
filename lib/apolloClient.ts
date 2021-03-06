// 参考: https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import 'cross-fetch/polyfill'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

const createApolloClient = () => {
  let url = process.env.NEXT_PUBLIC_HASURA_URL
    ? process.env.NEXT_PUBLIC_HASURA_URL
    : 'http://localhost:3000'
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // window ブラウザで実行している
    link: new HttpLink({
      uri: url,
      headers: {
        'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_KEY,
      },
    }),
    cache: new InMemoryCache(),
  })
}

export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient()

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}
