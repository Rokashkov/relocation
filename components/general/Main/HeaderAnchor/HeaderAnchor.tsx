import { AnchorHTMLAttributes } from 'react'
import styles from './HeaderAnchor.module.sass'

interface HeaderAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children?: string
}

export default function HeaderAnchor (props: HeaderAnchorProps) {
	const { children } = props
	
	return (
		<a
			{ ...props }
			rel='noreferrer'
			target='_blank'
			className={ styles.anchor }
		>
			{ children }
		</a>
	)
}