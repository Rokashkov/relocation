import Button from '../../Button/Button'
import styles from './NavCard.module.sass'

interface NavCardProps {
	children?: JSX.Element | JSX.Element[] | string
	title?: string
	icon?: JSX.Element
	href?: string
	linkText?: string
}

export default function NavCard (props: NavCardProps) {
	const { children, title, icon, href, linkText } = props
	
	return (
		<div
			className={ styles.card }
			onClick={ () => {
				window.location.href = href
			} }
		>
			<div className={ styles.icon }>{ icon }</div>
			<p className={ styles.title }>{ title }</p>
			<p className={ styles.description }>{ children }</p>
			<Button>{ linkText }</Button>
		</div>
	)
}