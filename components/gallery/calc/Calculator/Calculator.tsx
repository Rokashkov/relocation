import { selectValue, concat, backspace, clearAll, calculate } from '../../../../redux/calc.slice'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import Button from './Button/Button'
import Display from './Display/Display'
import Row from './Row/Row'
import styles from './Calculator.module.sass'
import { useEffect } from 'react'

export default function Calculator () {
	const value = useAppSelector((state) => selectValue(state))
	const dispatch = useAppDispatch()

	return (
		<div className={ styles.container }>
			<Display/>
			<Row>
				<Button onClick={ () => dispatch(clearAll()) }>CA</Button>
				<Button onClick={ () => dispatch(backspace()) }>Back</Button>
			</Row>
			<Row>
				<Button onClick={ () => dispatch(concat('(')) }>(</Button>
				<Button onClick={ () => dispatch(concat(')')) }>)</Button>
				<Button onClick={ () => dispatch(concat('^')) }>^</Button>
				<Button onClick={ () => dispatch(concat(' ÷ ')) }>÷</Button>
			</Row>
			<Row>
				<Button onClick={ () => dispatch(concat('7')) }>7</Button>
				<Button onClick={ () => dispatch(concat('8')) }>8</Button>
				<Button onClick={ () => dispatch(concat('9')) }>9</Button>
				<Button onClick={ () => dispatch(concat(' ✕ ')) }>✕</Button>
			</Row>
			<Row>
				<Button onClick={ () => dispatch(concat('4')) }>4</Button>
				<Button onClick={ () => dispatch(concat('5')) }>5</Button>
				<Button onClick={ () => dispatch(concat('6')) }>6</Button>
				<Button onClick={ () => dispatch(concat(' - ')) }>-</Button>
			</Row>
			<Row>
				<Button
					onKeyDown={ (e) => {
						console.log(e.currentTarget)
					} }
					onClick={ () => dispatch(concat('1')) }
				>
					1

				</Button>
				<Button onClick={ () => dispatch(concat('2')) }>2</Button>
				<Button onClick={ () => dispatch(concat('3')) }>3</Button>
				<Button onClick={ () => dispatch(concat(' + ')) }>+</Button>
			</Row>
			<Row style={ { justifyContent: 'flex-end' } }>
				<Button onClick={ () => dispatch(concat(':)')) }>:)</Button>
				<Button onClick={ () => dispatch(concat('0')) }>0</Button>
				<Button onClick={ () => dispatch(concat('.')) }>.</Button>
				<Button onClick={ () => { dispatch(calculate()) } }>=</Button>
			</Row>
		</div>
	)
}