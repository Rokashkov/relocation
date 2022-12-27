import styles from './Slide.module.sass'

interface SlideProps {
	children?: JSX.Element | JSX.Element[] | string
}

export default function Slide (props: SlideProps) {
	const { children } = props
	
	return (
		<section className={ styles.slide }>{ children }</section>
	)
}