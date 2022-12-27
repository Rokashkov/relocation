import Layout from '../components/general/Layout/Layout'

interface ErrorProps {
	statusCode: number
}

export default function Error (props: ErrorProps) {
	const { statusCode } = props
	
	return (
		<Layout>
			<div>{ statusCode }</div>
		</Layout>
	)
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}