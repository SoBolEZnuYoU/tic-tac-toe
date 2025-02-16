import Field from '../Field/Field'
import Information from '../Information/Information'
import styles from './Game.module.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

const GameLayout = ({states, onClick}) => {
	return (
		<div className={styles.game}>
			<Information {...states} />
			<Field {...states} />
			<button className={styles['restart-button']} type='button' onClick={onClick}>Начать заново</button>
		</div>
	)
}

GameLayout.propTypes = {
	states: PropTypes.object,
	onClick: PropTypes.func
}

const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(['', '', '', '', '', '', '', '', ''])

	const states = {
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
		field,
		setField,
	}

	const handleClick = () => {
		setCurrentPlayer('X')
		setIsGameEnded(false)
		setIsDraw(false)
		setField(['', '', '', '', '', '', '', '', ''])
	}

	return <GameLayout states={states} onClick={handleClick} />
}

export default Game
