import { HTMLAttributes } from 'react'
import styles from './Board.module.sass'

interface BoardProps extends HTMLAttributes<HTMLDivElement> {
	children?: JSX.Element | JSX.Element[]
}

export default function Board (props: BoardProps) {
	const { children } = props
	
	return (
		<div
			{ ...props }
			className={ styles.board }
		>
			{ children }

		</div>
	)
}