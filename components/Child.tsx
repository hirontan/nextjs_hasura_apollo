import { ChangeEvent, FormEvent, memo, VFC } from 'react'

interface Props {
  printMessage: () => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
}

export const Child: VFC<Props> = ({ printMessage }) => {}
