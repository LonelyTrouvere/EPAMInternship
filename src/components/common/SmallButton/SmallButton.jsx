import { Button } from '../Button/Button';

const SmallButton = (props) => {
	const { className, children } = props;
	return (
		<Button {...props} className={`!min-w-0 ${className}`}>
			{children}
		</Button>
	);
};

export { SmallButton };
