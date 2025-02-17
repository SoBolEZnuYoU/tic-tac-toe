import PropTypes from "prop-types"
import store from '../../store'
import { useState, useEffect } from 'react'

const InformationLayout = ({ text }) => {
	return (
		<div>
			<p>{text}</p>
		</div>
	)
}

InformationLayout.propTypes = {
	text: PropTypes.string
}

const Information = () => {
	const [currentState, setCurrentState] = useState(store.getState())
	const { isDraw, isGameEnded, currentPlayer } = currentState


	useEffect(() => {
		store.subscribe(() => setCurrentState(store.getState()))
	}, [])

	const text =
		isDraw === true
			? 'Ничья'
			: isDraw === false && isGameEnded === true
				? `Победил: ${currentPlayer}`
				:	`Ходит: ${currentPlayer}`

	return <InformationLayout text={text} />
}

Information.propTypes = {
	states: PropTypes.object
}

export default Information
