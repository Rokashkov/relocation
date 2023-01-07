/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImgHTMLAttributes, useEffect, useState } from 'react'
import styles from './Image.module.sass'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {

}

export default function Image (props: ImageProps) {
	const {  } = props
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {

		if (isActive) {
			document.body.classList.add('locked')
		}

		if (!isActive) {
			document.body.classList.remove('locked')
		}
	}, [isActive])

	return (
		<>
			<div className={ styles.wrapper }>
				<img
					onClick={ () => setIsActive(true) }
					{ ...props }
					className={ styles.image }
				/>
			</div>
			{ isActive && (
				<div
					className={ styles.backdrop }
					onClick={ () => setIsActive(false) }
				>
					<img
						{ ...props }
						className={ styles.image }
					/>
				</div>
			) }
		</>
	)
}