import Layout from '../components/general/Layout/Layout'
import NavCard from '../components/general/Main/cards/NavCard/NavCard'
import Board from '../components/general/Main/boards/Board'
import Slide from '../components/general/Main/Slide/Slide'
import Gallery from '../components/general/svg/Gallery'
import Gear from '../components/general/svg/Gear'
import Telegram from '../components/general/svg/Telegram'
import User from '../components/general/svg/User'

export default function Index () {

	return (
		<Layout>
			<Slide>
				<h1>Welcome</h1>
				<h2>to</h2>
				<h1>My Personal Website</h1>
			</Slide>
			<Slide>
				<h1>There</h1>
				<h2>You Can Find</h2>
				<Board style={ { paddingBottom: 0 } }>
					<NavCard
						icon={ <User/> }
						title="About"
						href="/about"
						linkText='Meet'
					>
						To introduce myself, I have a whole page about me, my skills and my bio
					</NavCard>
					<NavCard
						icon={ <Gear/> }
						title="Projects"
						href="/projects"
						linkText='Check'
					>
						Check my projects and a short summary for each of them
					</NavCard>
					<NavCard
						icon={ <Gallery/> }
						title="Gallery"
						href="/gallery"
						linkText='Watch'
					>
						You can watch my personal gallery of some cool solutions and apps
					</NavCard>
					<NavCard
						icon={ <Telegram/> }
						title="Contacts"
						href="/contacts"
						linkText='Visit'
					>
						If you want to contact me, you probably should visit this page
					</NavCard>
				</Board>
			</Slide>
		</Layout>
	)
}