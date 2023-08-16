const Button = (props) => {
	const { text, onClick, className } = props;
	return (
		<button
			type='button'
			{...props}
			className={className + ' custom-button'}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export { Button };
