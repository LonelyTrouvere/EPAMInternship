const Textarea = (props) => {
	const { labelText, className, ...inputProps } = props;

	return (
		<>
			<label className='block my-1'>{labelText}</label>
			<textarea
				className={`p-1 px-2 border-2 border-yellow-300 ${className}`}
				{...inputProps}
			/>
		</>
	);
};

export { Textarea };
