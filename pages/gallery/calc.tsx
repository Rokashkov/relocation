import { Provider } from 'react-redux'
import Calculator from '../../components/gallery/calc/Calculator/Calculator'
import Layout from '../../components/general/Layout/Layout'
import Slide from '../../components/general/Main/Slide/Slide'
import store from '../../redux/store'

export default function Calc () {

	return (
		<Layout>
			<Slide>
				<Provider store={ store }>
					<Calculator/>
				</Provider>
			</Slide>
		</Layout>
	)
}