import styles from './SkillCard.module.sass'

interface SkillCardProps {
	children?: JSX.Element | JSX.Element[]
	level?: number
	id?: string
	title?: string
}

export default function SkillCard (props: SkillCardProps) {
	const { children, level, id, title } = props

	return (
		<div
			id={ id }
			title={ title }
			className={ styles.card }
		>
			{ children }
			<h3 className={ styles.level }>
				{ level }
				/5
			</h3>
		</div>
	)
}