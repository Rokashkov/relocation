import styles from './Item.module.sass'

interface ItemProps {
	children?: JSX.Element | JSX.Element[] | string
}

export default function Item (props: ItemProps) {
	const { children } = props
	
	return (
		<div className={ styles.item }>
			<div className={ styles.before }/>
			<li className={ styles.item }>{ children }</li>
		</div>
		
	)
}