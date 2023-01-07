import { useEffect, useRef, useState } from 'react'
import GitHub from '../svg/GitHub'
import Telegram from '../svg/Telegram'
import styles from './Header.module.sass'
import Icon from './Nav/Icon/Icon'
import Item from './Nav/Item/Item'
import Nav from './Nav/Nav'

interface HeaderProps {
	
}

export default function Header (props: HeaderProps) {
	const {  } = props
	const ref = useRef(null)
	const [scrollY, setScrollY] = useState(0)
	const [prevScrollY, setPrevScrollY] = useState(0)
	const [offset, setOffset] = useState(0)

	useEffect(() => {
		setScrollY(window.scrollY)
		setPrevScrollY(window.scrollY)

		window.addEventListener('scroll', (e) => {
			const window = e.currentTarget as Window
			setScrollY(window.scrollY)
		})
	}, [])

	useEffect(() => {
		const { height } = ref.current.getBoundingClientRect()
		if (prevScrollY < scrollY) {
			setOffset(offset + (scrollY - prevScrollY) > height ? height : offset + (scrollY - prevScrollY))
		}

		if (prevScrollY > scrollY) {
			setOffset(offset - (prevScrollY - scrollY) < 0 ? 0 : offset - (prevScrollY - scrollY))
		}

		setPrevScrollY(scrollY)
	}, [scrollY])

	return (
		<header
			className={ styles.header }
			ref={ ref }
			style={ { top: - offset } }
		>
			<Nav>
				<Item href='/'>Main</Item>
				<Item href='/about'>About</Item>
				<Item href='/projects'>Projects</Item>
				<Item href='/gallery'>Gallery</Item>
				<Item href='/contacts'>Contacts</Item>
			</Nav>
			<Nav className={ styles.right }>
				<Icon href={ process.env.NEXT_PUBLIC_GITHUB_URL }>
					<GitHub/>
				</Icon>
				<Icon href={ process.env.NEXT_PUBLIC_TELEGRAM_URL }>
					<Telegram/>
				</Icon>
			</Nav>
			<div className={ styles.shadow }/>
		</header>
	)
}