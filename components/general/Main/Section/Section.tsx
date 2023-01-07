import { HTMLAttributes } from 'react'
import styles from './Section.module.sass'

interface SectionProps extends HTMLAttributes<HTMLElement> {
	children?: JSX.Element | JSX.Element[] | string
}

export default function Section (props: SectionProps) {
	const { children } = props
	
	return (
		<section
			className={ styles.section }
			{ ...props }
		>
			{ children }
		</section>
	)
}