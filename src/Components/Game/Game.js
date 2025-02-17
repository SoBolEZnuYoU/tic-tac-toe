import Field from '../Field/Field'
import Information from '../Information/Information'
import styles from './Game.module.css'
import PropTypes from 'prop-types'
import store from '../../store'

const GameLayout = () => {
	return (
		<div className={styles.game}>
			<Information />
			<Field />
			<button className={styles['restart-button']} type='button' onClick={() => store.dispatch({type: 'RESTART_GAME'})}>Начать заново</button>
		</div>
	)
}

GameLayout.propTypes = {
	states: PropTypes.object,
	onClick: PropTypes.func
}

const Game = () => {
	return <GameLayout />
}

export default Game
