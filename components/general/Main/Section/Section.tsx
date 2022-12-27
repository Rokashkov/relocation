import styles from './Section.module.sass'

interface SectionProps {
	children?: JSX.Element | JSX.Element[] | string
}

export default function Section (props: SectionProps) {
	const { children } = props
	
	return (
		<section className={ styles.section }>{ children }</section>
	)
}