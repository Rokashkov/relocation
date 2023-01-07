import React from 'react'
import Layout from '../components/general/Layout/Layout'
import Board from '../components/general/Main/boards/Board'
import SkillCard from '../components/general/Main/cards/SkillCard/SkillCard'
import ContentList from '../components/general/Main/ContentList/ContentList'
import Item from '../components/general/Main/ContentList/Item/Item'
import ListItem from '../components/general/Main/List/Item/Item'
import List from '../components/general/Main/List/List'
import ParagraphAnchor from '../components/general/Main/ParagraphAnchor/ParagraphAnchor'
import ParagraphGroup from '../components/general/Main/ParagraphGroup/ParagraphGroup'
import Section from '../components/general/Main/Section/Section'
import Slide from '../components/general/Main/Slide/Slide'
import Axios from '../components/general/svg/Axios'
import CSS from '../components/general/svg/CSS'
import Express from '../components/general/svg/Express'
import Git from '../components/general/svg/Git'
import HTML from '../components/general/svg/HTML'
import JS from '../components/general/svg/JS'
import JWT from '../components/general/svg/JWT'
import Nest from '../components/general/svg/Nest'
import Next from '../components/general/svg/Next'
import Node from '../components/general/svg/Node'
import Postgres from '../components/general/svg/Postgres'
import Prisma from '../components/general/svg/Prisma'
import ReactLogo from '../components/general/svg/ReactLogo'
import Redux from '../components/general/svg/Redux'
import Sass from '../components/general/svg/Sass'
import TS from '../components/general/svg/TS'

export default function About () {

	return (
		<Layout>
			<Slide>
				<h1>Welcome</h1>
				<h2>to</h2>
				<h1>About Page</h1>
			</Slide>
			<Section>
				<ContentList title="Contents">
					<Item href="#who">Who am I?</Item>
					<Item href="#skills">My skills</Item>
					<Item href="#stack">Current stack</Item>
				</ContentList>
			</Section>
			<Section id="who">
				<h2>Who am I?</h2>
				<ParagraphGroup>
					<p>
						My name is
						{' '}
						<span>Vladimir Rokashkov</span>
						, I&apos;m 21 years old, and I&apos;m an independent
						{' '}
						<span>fullstack web developer</span>
						{' '}
						from Tomsk city, Russia.
					</p>
					<p>
						Now I&apos;m programming on
						{' '}
						<span>typescript</span>
						{' '}
						using
						{' '}
						<span>Next</span>
						{' '}
						and
						{' '}
						<span>Nest</span>
						.
					</p>
					<p>
						Also I&apos;m a
						{' '}
						<span>biochemist student</span>
						{' '}
						of
						{' '}
						<span>Medical and Biological Faculty</span>
						{' '}
						of
						{' '}
						<span>Siberian State Medical University</span>
						.
					</p>
				</ParagraphGroup>
			</Section>
			<Section id="skills">
				<h2>My skills</h2>
				<ContentList title="Skills List">
					<Item href="#git">Git</Item>
					<Item href="#html">HTML</Item>
					<Item href="#css">CSS</Item>
					<Item href="#sass">Sass</Item>
					<Item href="#js">JavaScript</Item>
					<Item href="#ts">TypeScript</Item>
					<Item href="#node">Node</Item>
					<Item href="#express">Express</Item>
					<Item href="#react">React</Item>
					<Item href="#redux">Redux Toolkit</Item>
					<Item href="#axios">Axios</Item>
					<Item href="#jwt">JSON Web Tokens</Item>
					<Item href="#next">Next</Item>
					<Item href="#postgres">PostgreSQL</Item>
					<Item href="#prisma">Prisma</Item>
					<Item href="#nest">Nest</Item>
				</ContentList>
				<Board
					style={ { 
						gap: 20,
						paddingBottom: 0
					} }
				>
					<SkillCard
						id='git'
						title='Git'
						level={ 4 }
					>
						<Git/>
					</SkillCard>
					<SkillCard
						id='html'
						title='HTML'
						level={ 5 }
					>
						<HTML/>
					</SkillCard>
					<SkillCard
						id='css'
						title='CSS'
						level={ 4 }
					>
						<CSS/>
					</SkillCard>
					<SkillCard
						id='sass'
						title='Sass'
						level={ 4 }
					>
						<Sass/>
					</SkillCard>
					<SkillCard
						id='js'
						title='JavaScript'
						level={ 4 }
					>
						<JS/>
					</SkillCard>
					<SkillCard
						id='ts'
						title='TypeScript'
						level={ 5 }
					>
						<TS/>
					</SkillCard>
					<SkillCard
						id='node'
						title='NodeJS'
						level={ 4 }
					>
						<Node/>
					</SkillCard>
					<SkillCard
						id='express'
						title='Express'
						level={ 4 }
					>
						<Express/>
					</SkillCard>
					<SkillCard
						id='react'
						title='React'
						level={ 4 }
					>
						<ReactLogo/>
					</SkillCard>
					<SkillCard
						id='redux'
						title='Redux Toolkit'
						level={ 3 }
					>
						<Redux/>
					</SkillCard>
					<SkillCard
						id='axios'
						title='Axios'
						level={ 2 }
					>
						<Axios/>
					</SkillCard>
					<SkillCard
						id='jwt'
						title='JWT'
						level={ 5 }
					>
						<JWT/>
					</SkillCard>
					<SkillCard
						id='next'
						title='Next'
						level={ 4 }
					>
						<Next/>
					</SkillCard>
					<SkillCard
						id='postgres'
						title='PostgreSQL'
						level={ 2 }
					>
						<Postgres/>
					</SkillCard>
					<SkillCard
						id='prisma'
						title='Prisma'
						level={ 4 }
					>
						<Prisma/>
					</SkillCard>
					<SkillCard
						id='nest'
						title='Nest'
						level={ 3 }
					>
						<Nest/>
					</SkillCard>
				</Board>
			</Section>
			<Section id="stack">
				<h2>Current stack</h2>
				<List title='Front'>
					<ListItem>Next</ListItem>
					<ListItem>Sass</ListItem>
					<ListItem>Redux Toolkit</ListItem>
					<ListItem>Axios</ListItem>
				</List>
				<List title='Back'>
					<ListItem>Express or Nest</ListItem>
					<ListItem>PostgresSQL</ListItem>
					<ListItem>Prisma</ListItem>
				</List>
			</Section>
		</Layout>
	)
}