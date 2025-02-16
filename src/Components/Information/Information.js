import PropTypes from "prop-types"

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

const Information = (states) => {
	const { isDraw, isGameEnded, currentPlayer } = states

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
