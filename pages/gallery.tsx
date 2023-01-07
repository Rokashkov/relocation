import Layout from '../components/general/Layout/Layout'
import ContentList from '../components/general/Main/ContentList/ContentList'
import Item from '../components/general/Main/ContentList/Item/Item'
import ListItem from '../components/general/Main/List/Item/Item'
import Image from '../components/general/Main/Image/Image'
import Section from '../components/general/Main/Section/Section'
import Slide from '../components/general/Main/Slide/Slide'
import Redux from '../components/general/svg/Redux'
import ProjectHeader from '../components/general/Main/ProjectHeader/ProjectHeader'
import HTML from '../components/general/svg/HTML'
import ReactLogo from '../components/general/svg/ReactLogo'
import Next from '../components/general/svg/Next'
import Sass from '../components/general/svg/Sass'
import CSS from '../components/general/svg/CSS'
import List from '../components/general/Main/List/List'
import ParagraphGroup from '../components/general/Main/ParagraphGroup/ParagraphGroup'
import HeaderAnchor from '../components/general/Main/HeaderAnchor/HeaderAnchor'
import ParagraphAnchor from '../components/general/Main/ParagraphAnchor/ParagraphAnchor'

export default function Gallery () {

	return (
		<Layout>
			<Slide>
				<h1>Welcome</h1>
				<h2>to</h2>
				<h1>Gallery</h1>
			</Slide>
			<Section>
				<ContentList title='Contents'>
					<Item href='#calc'>A Simple Calculator</Item>
				</ContentList>
			</Section>
			<Section id='calc'>
				<ProjectHeader
					title='A Simple Calculator'
					href='/gallery/calc'
				>
					<HTML/>
					<CSS/>
					<Sass/>
					<ReactLogo/>
					<Next/>
					<Redux/>
				</ProjectHeader>
				<h3>Preview</h3>
				<Image src='/images/calc.png'/>
				<h3>Annotation</h3>
				<ParagraphGroup>
					<p>
						The most simple calculator app. Each button dispatches a symbol that concatinate with global state value. When the calculate button is pressed, this value is parsed to a regular expression that can be compiled by the
						{' '}
						<code>eval()</code>
						{' '}
						function, which returns a new value.
					</p>
					<p>Smile emoji is parsed to a random integer number from 0 to 100.</p>
				</ParagraphGroup>
				<List title='Pros'>
					<ListItem>the global state manager is used</ListItem>
					<ListItem>error handling</ListItem>
				</List>
				<List title='Cons'>
					<ListItem>only mouse input</ListItem>
					<ListItem>you can enter any expression</ListItem>
				</List>
				<List title='Links'>
					<ListItem>
						<ParagraphAnchor
							rel='noreferrer'
							target='_blank'
							href='/gallery/calc'
						>
							Open in a new tab
						</ParagraphAnchor>

					</ListItem>
				</List>
			</Section>
		</Layout>
	)
}