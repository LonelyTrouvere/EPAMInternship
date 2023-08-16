import { v4 } from 'uuid';

const MessageBox = ({ status, message }) => {
	return (
		<div key={v4()} className={'message-holder ' + status}>
			<p>{message}</p>
		</div>
	);
};

export { MessageBox };
