import styles from './Item.module.sass'

interface ItemProps {
	children?: string
	href?: string
}

export default function Item (props: ItemProps) {
	const { children, href } = props

	return (
		<div 
			className={ styles.item }
			onClick={ () => {
				window.location.href = href
			} }
		>
			<div className={ styles.before }/>
			<a
				href={ href }
				className={ styles.text }
			>
				{ children }
			</a>
			<div className={ styles.arrow }>
				<div className={ styles.point + ' ' + styles.top }/>
				<div className={ styles.point + ' ' + styles.bot }/>
			</div>
		</div>
		
	)
}