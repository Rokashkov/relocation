import { useEffect, useRef, useState } from 'react'
import styles from './ContentList.module.sass'

interface ContentListProps {
	children?: JSX.Element | JSX.Element[]
	title?: string
}

export default function ContentList (props: ContentListProps) {
	const { children, title } = props
	const [isActive, setIsActive] = useState(false)
	const [height, setHeight] = useState(0)
	const ref = useRef(null)

	useEffect(() => {
		setHeight(ref.current.offsetHeight)
	}, [])

	return (
		<div
			className={ styles.wrapper + (isActive ? ' ' + styles.active : '') }
		>
			<div
				className={ styles.title }
				onClick={ () => {
					setIsActive(!isActive)
				} }
			>
				<h3 className={ styles.text }>{ title }</h3>
				<div className={ styles.arrow }>
					<div className={ styles.left + (isActive? ' ' + styles.active : '') }/>
					<div className={ styles.right + (isActive? ' ' + styles.active : '') }/>
				</div>
			</div>
			<div
				className={ styles.frame }
				style={ {
					height: isActive ? height : 0
				} }
			>
				<div
					ref={ ref }
					className={ styles.list }
				>
					{ children }
				</div>
			</div>
		</div>
	)
}