import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface CalcState {
	value: string
}

const initialState: CalcState = {
	value: '0'
}

const calcSlice = createSlice({
	name: 'calc',
	initialState,
	reducers: {
		concat: (state, action: PayloadAction<string>) => {
			
			if (state.value !== '0') {
				state.value += action.payload
			}

			if (state.value === '0') {
				
				if (action.payload !== '.') {
					state.value = action.payload
				}

				if (action.payload === '.') {
					state.value += action.payload
				}
			}

		},

		backspace: (state) => {
			const length = state.value.length

			if (length === 1 && state.value !== '0') {
				state.value = '0'
			}

			if (length !== 1) {
				if (state.value[length - 1] === ' ') {
					
					state.value = state.value.slice(0, length - 3) ? state.value.slice(0, length - 3) : '0'
				}
				
				if (state.value[-1] !== ' ') {
					state.value = state.value.slice(0, length - 1)
				}
			}
		},
		
		clearAll: (state) => {
			state.value = '0'
		},

		calculate: (state) => {
			const RegExp = state.value.replaceAll(':)', String(Math.round(Math.random() * 100))).replaceAll('^', '**').replaceAll('✕', '*').replaceAll('÷', '/')

			try {
				state.value = String(eval(RegExp))
			} catch (err) {
				return
			}
		}
	}
})

export const { calculate, concat, backspace, clearAll } = calcSlice.actions
export const selectValue = (state: RootState) => state.calc.value

export default calcSlice.reducer