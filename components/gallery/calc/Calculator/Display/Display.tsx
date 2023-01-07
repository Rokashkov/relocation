import { selectValue } from '../../../../../redux/calc.slice'
import { useAppSelector } from '../../../../../redux/hooks'
import styles from './Display.module.sass'

interface DisplayProps {

}

export default function Display (props: DisplayProps) {
	const {  } = props
	const value = useAppSelector((state) => selectValue(state))
	
	return (
		<div className={ styles.display }>
			<h2 className={ styles.item }>{ value }</h2>
		</div>
	)
}