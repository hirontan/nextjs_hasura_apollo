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
  const [editedUser, setEditedUser] = useState({id: '', name: ''})
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS, {
    fetchPolicy: 'cache-and-network'
  })

  // Updateは自動的にキャッシュを更新してくれる
  const [update_users_by_pk] = useMutation<UpdateUserMutation>(UPDATE_USER)

  // Createは自動的にキャッシュを更新してくれない
  const [insert_users_one] = useMutation<CreateUserMutation>(CREATE_USER, {
    update(cache, { data: { insert_users_one } }) {
      const cacheId = cache.identify(insert_users_one) // cacheのIDを取得できる
      cache.modify({
        fields: {
          users(existingUsers, { toReference }) {
            return [toReference(cacheId, ...existingUsers)] // 配列の先頭にデータを追加する
          }
        }
      })
    }
  })

  // Deleteは自動的にキャッシュを更新してくれない
  const [delete_users_by_pk] = useMutation<DeleteUserMutation>(CREATE_USER, {
    update(cache, { data: { delete_users_by_pk } }) {
      cache.modify({
        fields: {
          users(existingUsers, { readField }) {
            return existingUsers.filter(
              (user) => delete_users_by_pk.id !== readField('id', user) // filterを使って削除。残ったデータのみ残す
            )
          }
        }
      })
    }
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editedUser.id) {
      try {
        await update_users_by_pk({variables: {id: editedUser.id, name: editedUser.name}})
      } catch (err) {
        alert(err.message)
      }
      setEditedUser({id: '', name: ''})
    } else {
      try {
          await insert_users_one({
            variables: {
            name: editedUser.name
          }
        })
      } catch(err) {
        alert(err.message)
      }
      setEditedUser({id: '', name: ''})
  }

  return (
    <Layout title="Hasura CRUD">
      <p className="mb-3 font-bold">Hasura CRUD</p>
      <form className="flex flex-col justify^center items-center" onSubmit={handleSubmit}></form>
    </Layout>
  )
}

export default HasuraCRUD
