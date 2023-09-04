import { Button } from '../Button/Button';

const SmallButton = (props) => {
	const { className } = props;
	return <Button {...props} className={`!min-w-0 ${className}`} />;
};

export { SmallButton };
