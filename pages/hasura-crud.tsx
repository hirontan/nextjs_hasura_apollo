import { VFC, useState, FormEvent } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import {
  GET_USERS,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER
} from '../queries/queries'
// データ型
import {
  GetUsersQuery,
  CreateUserMutation,
  DeleteUserMutation,
  UpdateUserMutation
} from '../types/generated/graphql'
import { Layout } from '../components/Layout'

const HasuraCRUD: VFC = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS, {
    fetchPolicy: 'cache-and-network'
  })

  // Updateは自動的にキャッシュを更新してくれる
  const [update_users_by_pk] = useMutation<UpdateUserMutation>(UPDATE_USER)

  return (
    <Layout title="Hasura CRUD">
      <p className="mb-3 font-bold">Hasura CRUD</p>
    </Layout>
  )
}

export default HasuraCRUD
