import styles from './List.module.sass'

interface ListProps {
	children?: JSX.Element | JSX.Element[]
	title?: string
}

export default function List (props: ListProps) {
	const { children, title } = props
	
	return (
		<ul className={ styles.wrapper }>
			{ title && <h3>{ title }</h3> }
			<div className={ styles.list }>{ children }</div>
		</ul>
	)
}