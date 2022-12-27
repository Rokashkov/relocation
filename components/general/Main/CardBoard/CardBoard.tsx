import styles from './CardBoard.module.sass'

interface CardBoardProps {
	children?: JSX.Element | JSX.Element[]
}

export default function CardBoard (props: CardBoardProps) {
	const { children } = props
	
	return (
		<div className={ styles.card_board }>{ children }</div>
	)
}