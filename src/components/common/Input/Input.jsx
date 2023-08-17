const Input = (props) => {
	const { labelText, type, className, ...inputProps } = props;

	return (
		<>
			<label className='block my-1'>{labelText}</label>
			<input
				className={`border-2 h-12 pl-2 border-yellow-300 focus:border-yellow-300 text-green-500 ${className}`}
				type={type}
				{...inputProps}
			/>
		</>
	);
};

export { Input };
