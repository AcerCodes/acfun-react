import styles from "@/styles/Home.module.css"
import clsx from "clsx"

export default function Home() {
	let condition = false
	// repeated main tag
	return (
		<main
			className={clsx(styles.main, {
				[styles.conditionalClass]: condition,
			})}
		/>
	)
}
