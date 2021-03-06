import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { setupServer } from 'msw/node'
import { getPage, initTestHelpers } from 'next-page-tester'
import { handlers } from '../mocks/handlers'
import 'setimmediate'

initTestHelpers()

const server = setupServer(...handlers)
beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
afterAll(() => {
  server.close()
})

describe('Hasura CRUD Test Cases', () => {
  it('Should render the list of users by useQuery', async () => {
    const { page } = await getPage({
      route: '/hasura-crud',
    })
    render(page)
    expect(await screen.findByText('Hasura CRUD')).toBeInTheDocument()

    // Test user A
    expect(await screen.findByText('Test user A')).toBeInTheDocument()
    expect(
      screen.getByText('2021-10-06T00:00:00.000000+00:00')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('edit-aaaa1111-aa11-aa11-aa11-aaaaaa111111')
    ).toBeTruthy()
    expect(
      screen.getByTestId('delete-aaaa1111-aa11-aa11-aa11-aaaaaa111111')
    ).toBeTruthy()

    // Test user B
    expect(await screen.findByText('Test user B')).toBeInTheDocument()
    expect(
      screen.getByText('2021-10-06T00:00:00.000000+00:01')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('edit-bbbb1111-bb11-bb11-bb11-bbbbbb111111')
    ).toBeTruthy()
    expect(
      screen.getByTestId('delete-bbbb1111-bb11-bb11-bb11-bbbbbb111111')
    ).toBeTruthy()

    // Test user C
    expect(await screen.findByText('Test user C')).toBeInTheDocument()
    expect(
      screen.getByText('2021-10-06T00:00:00.000000+00:02')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('edit-cccc1111-cc11-cc11-cc11-ccccccc111111')
    ).toBeTruthy()
    expect(
      screen.getByTestId('delete-cccc1111-cc11-cc11-cc11-ccccccc111111')
    ).toBeTruthy()
  })
})
