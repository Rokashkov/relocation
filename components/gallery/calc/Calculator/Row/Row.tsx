import { HTMLAttributes } from 'react'
import styles from './Row.module.sass'

interface RowProps extends HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[]
}

export default function Row (props: RowProps) {
	const { children } = props
	
	return (
		<div 
			{ ...props }
			className={ styles.row }
		>
			{ children }
		</div>
	)
}