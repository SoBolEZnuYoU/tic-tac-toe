import styles from './Field.module.css'
import { WIN_PATTERNS } from '../../WIN_PATTERNS'
import PropTypes from 'prop-types'

const FieldLayout = ({ field, onClick }) => {
	return (
		<div className={styles.field}>
			{field.map((value, i) => (
				<button className={styles.button} type='button' id={i} key={i} onClick={(e) => onClick(e)}>
					{value}
				</button>
			))}
		</div>
	)
}

FieldLayout.propTypes = {
	field: PropTypes.array,
	onClick: PropTypes.func
}

const Field = (states) => {
	const {
		field,
		setField,
		isGameEnded,
		setIsGameEnded,
		setIsDraw,
		currentPlayer,
		setCurrentPlayer,
	} = states

	const handleClick = ({target}) => {
		const newField = [...field]


		if (!newField[target.id] && !isGameEnded) {
			newField[target.id] = currentPlayer
			setField(newField)

			const win = WIN_PATTERNS.some(pattern => {
				return pattern.every(value => newField[value] === currentPlayer)
			})

			if (win) {
				setIsGameEnded(true)
			} else if (!win && newField.every(cell => cell)) {
				setIsDraw(true)
			} else if (!win && !newField.every(cell => cell)) {
				setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
			}
		}

	}


	return <FieldLayout field={field} onClick={handleClick}/>
}

Field.propTypes = {states: PropTypes.object}

export default Field
