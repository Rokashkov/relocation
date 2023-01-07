import KeySkillBoard from '../boards/KeySkillBoard/KeySkillBoard'
import HeaderAnchor from '../HeaderAnchor/HeaderAnchor'
import styles from './ProjectHeader.module.sass'

interface ProjectHeaderProps {
	children?: JSX.Element | JSX.Element[]
	title?: string
	href?: string
}

export default function ProjectHeader (props: ProjectHeaderProps) {
	const { children, href, title } = props
	
	return (
		<div className={ styles.header }>
			<HeaderAnchor href={ href }>{ title }</HeaderAnchor>
			<div className={ styles.key_skills }>
				<h4>Key Skills:</h4>
				<KeySkillBoard>{ children }</KeySkillBoard>
			</div>
		</div>
	)
}