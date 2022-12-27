import { useEffect, useState } from 'react'
import styles from './Item.module.sass'

interface ItemProps {
	children?: string
	href: string
}

export default function Item (props: ItemProps) {
	const { children, href } = props
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {
		setIsActive(href === window.location.pathname)
	}, [])

	return (
		<a
			className={ styles.item + (isActive ? ' ' + styles.active : '') }
			href={ href }
		>
			<div className={ styles.text }>
				{ children }
			</div>
		</a>
	)
}