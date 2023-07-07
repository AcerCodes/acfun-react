import Head from "next/head"
import { useEffect, useState } from "react"

interface MenuList {
	title: string
	pages: string
}

interface navbarProps<T> {
	menuList: T[]
	title?: string
}

export function Navbar(props: navbarProps<MenuList>) {
	const [metaData, setMetaData] = useState<NComponent.IMateData>({})
	useEffect(() => {
		const { title } = props
		setMetaData({ title })
	}, [])
	return (
		<>
			<Head>
				<title>{metaData.title}</title>
			</Head>
			{/* repeated main tag */}
			<main>11</main>
		</>
	)
}
