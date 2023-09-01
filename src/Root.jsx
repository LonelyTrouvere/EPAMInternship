import { App } from 'App';
import { Provider } from 'react-redux';
import { store } from 'store/index';

const Root = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export { Root };
