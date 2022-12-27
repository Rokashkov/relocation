import { HTMLAttributes } from 'react'
import styles from './Nav.module.sass'

interface NavProps extends HTMLAttributes<HTMLElement> {
	children?: JSX.Element | JSX.Element[] | string
}

export default function Nav (props: NavProps) {
	const { children, className } = props
	
	return (
		<nav
			{ ...props }
			className={ styles.nav + (className ? ' ' + className : '') }
		>
			{ children }
		</nav>
	)
}