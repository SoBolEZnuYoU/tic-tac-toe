import styles from './Field.module.css'

const FieldLayout = ({ field, click }) => {
	return (
		<div className={styles.field}>
			{field.map((value, i) => (
				<button className={styles.button} id={i} key={i} onClick={click}>
					{value}
				</button>
			))}
		</div>
	)
}

const Field = (states) => {
	const {
		currentPlayer,
		isGameEnded,
		isDraw,
		field,
		setCurrentPlayer,
		setIsGameEnded,
		setIsDraw,
		setField,
	} = states

	const onCellClick = (event) => {
		const { target } = event

		setField((prevField) => {
			return prevField.map((value, i) => {
				if (i === +target.id && !value && !isGameEnded) {
					return currentPlayer
				} else {
					return value
				}
			})
		})
	}

	return <FieldLayout field={field} click={onCellClick} />
}

export default Field
