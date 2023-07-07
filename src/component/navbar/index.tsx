import Head from 'next/head'
import { useEffect } from "react"

interface MenuList {
  title: string,
  pages: string
}

interface navbarProps<T> {
  menuList: T[],
  title?: string
}

export function Navbar(props: navbarProps<MenuList>) {
  const a: IMateData = { title: '' }
  console.log(a)
  useEffect(() => {
    const { title, menuList } = props
    console.log(title, menuList)
  }, [])
  return (
    <>
      <Head>
        <title>ceshi</title>
      </Head>
      <main>
        11
      </main>
    </>

  )
}
