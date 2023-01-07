import { HTMLAttributes } from 'react'
import styles from './Button.module.sass'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children?: string | JSX.Element | JSX.Element[]
}

export default function Button (props: ButtonProps) {
	const { children } = props
	
	return (
		<button
			{ ...props }
			type='button' 
			className={ styles.button }
		>
			{ children }
		</button>
	)
}