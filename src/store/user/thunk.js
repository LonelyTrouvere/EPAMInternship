import { userMe } from 'services';
import { loginAction } from './actionCreators';

const fetchUser = () => {
	return async (dispatch) => {
		const token = localStorage.getItem('token');
		if (token) {
			const user = await userMe(token);
			delete user.password;
			delete user.id;
			dispatch(loginAction(user));
		}
	};
};

export { fetchUser };
