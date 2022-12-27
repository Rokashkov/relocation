import styles from './Icon.module.sass'

interface IconProps {
	children?: JSX.Element
	href: string
}

export default function Icon (props: IconProps) {
	const { children, href } = props
	
	return (
		<div className={ styles.wrapper }>
			<a
				href={ href }
				className={ styles.icon }
			>
				{ children }
			</a>
		</div>
	)
}