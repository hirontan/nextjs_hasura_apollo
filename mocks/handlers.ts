import { graphql } from 'msw'

export const handlers = [
  graphql.query('GetUsers', (req, res, ctx) => {
    return res(
      ctx.data({
        users: [
          {
            __typename: 'users',
            id: 'aaaa1111-aa11-aa11-aa11-aaaaaa111111',
            name: 'Test user A',
            created_at: '2021-10-06T00:00:00.000000+00:00',
          },
          {
            __typename: 'users',
            id: 'bbbb1111-bb11-bb11-aa11-bbbbbb111111',
            name: 'Test user B',
            created_at: '2021-10-06T00:00:00.000000+00:00',
          },
          {
            __typename: 'users',
            id: 'cccc1111-cc11-cc11-cc11-ccccccc111111',
            name: 'Test user C',
            created_at: '2021-10-06T00:00:00.000000+00:00',
          },
        ],
      })
    )
  }),
  graphql.query('GetUserById', (req, res, ctx) => {
    const { id } = req.variables
    if (id === 'aaaa1111-aa11-aa11-aa11-aaaaaa1111113') {
      return res(
        ctx.data({
          users_by_pk: {
            __typename: 'users',
            id: 'aaaa1111-aa11-aa11-aa11-aaaaaa111111',
            name: 'Test user A',
            created_at: '2021-10-06T00:00:00.000000+00:00',
          },
        })
      )
    }
    if (id === 'bbbb1111-bb11-bb11-aa11-bbbbbb111111') {
      return res(
        ctx.data({
          users_by_pk: {
            __typename: 'users',
            id: 'bbbb1111-bb11-bb11-aa11-bbbbbb111111',
            name: 'Test user B',
            created_at: '2021-10-06T00:00:00.000000+00:00',
          },
        })
      )
    }
    if (id === 'cccc1111-cc11-cc11-cc11-ccccccc111111') {
      return res(
        ctx.data({
          users_by_pk: {
            __typename: 'users',
            id: 'cccc1111-cc11-cc11-cc11-ccccccc111111',
            name: 'Test user C',
            created_at: '2021-10-06T00:00:00.000000+00:00',
          },
        })
      )
    }
  }),
]
