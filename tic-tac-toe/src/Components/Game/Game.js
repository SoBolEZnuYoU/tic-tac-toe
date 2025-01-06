import Field from '../Field/Field'
import Information from '../Information/Information'
import styles from './Game.module.css'
import { useState } from 'react'

const GameLayout = (states) => {
	return (
		<div className={styles.game}>
			<Information {...states} />
			<Field {...states} />
			<button className={styles['restart-button']}>Начать заново</button>
		</div>
	)
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
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

const win = WIN_PATTERNS.some(pattern => {
	return pattern.every(value => field[value] === currentPlayer)
})

console.log(win)

	return <GameLayout {...states} />
}

export default Game
