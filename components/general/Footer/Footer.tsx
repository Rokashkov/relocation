import List from '../Main/List/List'
import ListItem from '../Main/List/Item/Item'
import ParagraphAnchor from '../Main/ParagraphAnchor/ParagraphAnchor'
import styles from './Footer.module.sass'
import Section from '../Main/Section/Section'

interface FooterProps {
	
}

export default function Footer (props: FooterProps) {
	const {  } = props
	
	return (
		<footer className={ styles.footer }>
			<Section>
				<List title='Go to'>
					<ListItem><ParagraphAnchor href='/'>Main</ParagraphAnchor></ListItem>
					<ListItem><ParagraphAnchor href='/about'>About</ParagraphAnchor></ListItem>
					<ListItem><ParagraphAnchor href='/projects'>Projects</ParagraphAnchor></ListItem>
					<ListItem><ParagraphAnchor href='/gallery'>Gallery</ParagraphAnchor></ListItem>
					<ListItem><ParagraphAnchor href='/contacts'>Contacts</ParagraphAnchor></ListItem>
				</List>
				<List title='Contacts'>
					<ListItem>
						<ParagraphAnchor
							rel='noreferrer'
							target='_blank'
							href={ process.env.NEXT_PUBLIC_GITHUB_URL }
						>
							GitHub
						</ParagraphAnchor>

					</ListItem>
					<ListItem>
						<ParagraphAnchor
							rel='noreferrer'
							target='_blank'
							href={ process.env.NEXT_PUBLIC_TELEGRAM_URL }
						>
							Telegram
						</ParagraphAnchor>

					</ListItem>
				</List>
			</Section>
		</footer>
	)
}