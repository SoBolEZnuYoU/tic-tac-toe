import styles from './Field.module.css'
import { WIN_PATTERNS } from '../../WIN_PATTERNS'
import PropTypes from 'prop-types'
import store from '../../store'
import { useState, useEffect } from 'react'

const FieldLayout = ({ onClick }) => {
	const { field } = store.getState()

	return (
		<div className={styles.field}>
			{field.map((value, i) => (
				<button
					className={styles.button}
					type="button"
					id={i}
					key={i}
					onClick={(e) => onClick(e)}
				>
					{value}
				</button>
			))}
		</div>
	)
}

FieldLayout.propTypes = {
	field: PropTypes.array,
	onClick: PropTypes.func,
}

const Field = () => {
	const [currentState, setCurrentState] = useState(store.getState())
	const { currentPlayer, isGameEnded, field } = currentState

	useEffect(() => {
		store.subscribe(() => setCurrentState(store.getState()))
	}, [])

	const handleClick = ({ target }) => {
		const newField = [...field]

		if (!newField[target.id] && !isGameEnded) {
			newField[target.id] = currentPlayer
			store.dispatch({ type: 'SET_FIELD', payload: newField })

			const win = WIN_PATTERNS.some((pattern) => {
				return pattern.every((value) => newField[value] === currentPlayer)
			})

			if (win) {
				store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true })
			} else if (!win && newField.every((cell) => cell)) {
				store.dispatch({ type: 'SET_IS_DRAW', payload: true })
			} else if (!win && !newField.every((cell) => cell)) {
				store.dispatch({
					type: 'SET_CURRENT_PLAYER',
					payload: currentPlayer === 'X' ? 'O' : 'X',
				})
			}
		}
	}

	return <FieldLayout onClick={handleClick} />
}

Field.propTypes = { states: PropTypes.object }

export default Field
