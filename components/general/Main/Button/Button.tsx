import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.sass'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
	children?: JSX.Element | JSX.Element[] | string
}

export default function Button (props: ButtonProps) {
	const { children } = props
	
	return (
		<button
			className={ styles.button }
			{ ...props }
		>
			{ children }
		</button>
	)
}