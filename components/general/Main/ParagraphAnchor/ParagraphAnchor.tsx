import { AnchorHTMLAttributes } from 'react'
import styles from './ParagraphAnchor.module.sass'

interface ParagraphAnchorProps  extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children?: string
}

export default function ParagraphAnchor (props: ParagraphAnchorProps) {
	const { children } = props
	
	return (
		<a
			{ ...props }
			className={ styles.anchor }
		>
			{ children }
		</a>
	)
}