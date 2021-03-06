import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { getPage, initTestHelpers } from 'next-page-tester'
import { setupServer } from 'msw/node'
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

describe('UserDetail Test Cases', () => {
  it('Should render the user detail pre-fetched by getStaticProps', async () => {
    const { page } = await getPage({
      route: '/users/aaaa1111-aa11-aa11-aa11-aaaaaa111111',
    })
    render(page)
    expect(await screen.findByText('User detail')).toBeInTheDocument()
    expect(screen.getByText('Test user A')).toBeInTheDocument()
    expect(
      screen.getByText('2021-10-06T00:00:00.000000+00:00')
    ).toBeInTheDocument()

    userEvent.click(screen.getByTestId('back-to-main'))
    expect(await screen.findByText('SSG+ISR')).toBeInTheDocument()

    // Test User B（後ほど修正）
    // userEvent.click(
    //   await screen.getByTestId('link-bbbb1111-bb11-bb11-bb11-bbbbbb111111')
    // )
    // expect(await screen.findByText('User detail')).toBeInTheDocument()
    // expect(await screen.findByText('Test user B')).toBeInTheDocument()
    // expect(
    //   screen.getByText('2021-10-06T00:00:00.000000+00:01')
    // ).toBeInTheDocument()
  })
})
