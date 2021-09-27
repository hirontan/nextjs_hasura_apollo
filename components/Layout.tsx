import { ReactNode, VFC } from "react";
import Head from "next/head";
import Link from "next/link";

// タイトルをStringの型とする
interface Props {
  children: ReactNode
  title: string
}
