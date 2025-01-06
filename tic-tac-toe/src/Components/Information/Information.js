const InformationLayout = ({ text }) => {
	return (
		<div>
			<p>{text}</p>
		</div>
	)
}

const Information = (states) => {
	const { isDraw, isGameEnded, currentPlayer } = states

	const text =
		isDraw === true
			? 'Ничья'
			: isDraw === false && isGameEnded === false
				? `Ходит: ${currentPlayer}`
				: `Победил: ${currentPlayer}`

	return <InformationLayout text={text} />
}

export default Information
