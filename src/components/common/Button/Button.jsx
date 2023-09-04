const Button = (props) => {
	const { className, children } = props;
	return (
		<button
			{...props}
			className={`min-w-[10rem] bg-transparent hover:bg-purple-300 text-black font-semibold py-2 px-4 border border-purple-700 ${className}`}
		>
			{children}
		</button>
	);
};

export { Button };
