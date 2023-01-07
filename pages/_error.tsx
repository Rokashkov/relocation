import Layout from '../components/general/Layout/Layout'
import Slide from '../components/general/Main/Slide/Slide'

interface ErrorProps {
	statusCode: number
}

export default function Error (props: ErrorProps) {
	const { statusCode } = props
	
	return (
		<Layout>
			<Slide>
				<h1>Error</h1>
				<h2>:(</h2>
			</Slide>
		</Layout>
	)
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}