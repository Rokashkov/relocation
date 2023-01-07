import { HTMLAttributes } from 'react'
import styles from './KeySkillBoard.module.sass'

interface KeySkillBoardProps extends HTMLAttributes<HTMLDivElement> {
	children?: JSX.Element | JSX.Element[]
}

export default function KeySkillBoard (props: KeySkillBoardProps) {
	const { children } = props
	
	return (
		<div className={ styles.board }>
			{ children }
		</div>
	)
}