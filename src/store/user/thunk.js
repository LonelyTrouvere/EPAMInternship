import { loginUser, logout, userMe } from 'services';
import { loginAction, logoutAction } from './actionCreators';

const fetchUser = () => {
	return async (dispatch) => {
		const token = localStorage.getItem('token');
		if (token) {
			const user = await userMe(token);
			user.token = token;
			user.isAuth = true;
			delete user.password;
			delete user.id;
			dispatch(loginAction(user));
		}
	};
};

const loginThunk = (user) => {
	return async (dispatch) => {
		const data = await loginUser(user);
		const token = data.result;
		localStorage.setItem('token', token);
		dispatch(fetchUser());
	};
};

const logoutThunk = () => {
	return async (dispatch) => {
		await logout();
		localStorage.removeItem('token');
		dispatch(logoutAction());
	};
};

export { fetchUser, loginThunk, logoutThunk };
