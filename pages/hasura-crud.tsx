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
  return(<Layout title="Hasura CRUD"></Layout>)
}

export default HasuraCRUD
