import { ReactNode, VFC } from "react";
import Head from "next/head";
import Link from "next/link";

// タイトルをStringの型とする
interface Props {
  children: ReactNode
  title: string
}

export const Layout: VFC<Props> = ({
  children,
  title = 'Welcome to Nextjs'
}) => {
  return (<div className="flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono"></div>)
}
