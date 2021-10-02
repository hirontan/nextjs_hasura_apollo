import { VFC } from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_USERS } from '../queries/queries'
import { GetUsersQuery } from '../types/generated/graphql'
import { Layout } from '../components/Layout'

const FetchMain: VFC = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS, {
    // 4つのfetchPolicy
    // fetchPolicy: 'network-only', // 取得が終わったあとに、データが表示される
    fetchPolicy: 'cache-and-network', // 前回までのキャッシュのデータを表示してくれる
    // fetchPolicy: 'cache-first', // fetchPolicyのデフォルトは、cache-first（常にキャッシュを読みにいく）
    // fetchPolicy: 'no-cache', // 毎回、fetchする
  })
  if (error)
    return (
      <Layout title="Hasura fetchPolicy">
        <p>Error: {error.message}</p>
      </Layout>
    )
  return (
    <Layout title="Hasura fetchPolicy">
      <p className="mb-6 font-bold">Hasura main page</p>
      {console.log(data)}
      {data?.users.map((user) => {
        return (
          <p className="my-1" key={user.id}>
            {user.name}
          </p>
        )
      })}
      <Link href="/hasura-sub">
        <a className="mt-6">Next</a>
      </Link>
    </Layout>
  )
}

export default FetchMain
