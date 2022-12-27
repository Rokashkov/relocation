import styles from './Main.module.sass'

interface MainProps {
	children?: JSX.Element | JSX.Element[] | string
}

export default function Main (props: MainProps) {
	const { children } = props
	
	return (
		<main className={ styles.main }>
			{ children }
		</main>
	)
}