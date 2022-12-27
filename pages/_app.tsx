import { ComponentType } from 'react'
import '../styles/global.sass'

export default function MyApp({ Component, pageProps }: { Component: ComponentType, pageProps: any }) {
	
	return (
		<Component { ...pageProps }/>
	)
}