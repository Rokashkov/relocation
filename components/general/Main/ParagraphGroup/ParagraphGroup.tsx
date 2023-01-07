import styles from './ParagraphGroup.module.sass'

interface ParagraphGroupProps {
	children?: JSX.Element | JSX.Element[]
}

export default function ParagraphGroup (props: ParagraphGroupProps) {
	const { children } = props
	
	return (
		<div className={ styles.group }>{ children }</div>
	)
}