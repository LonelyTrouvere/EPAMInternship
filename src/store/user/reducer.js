import { LOGIN, LOGOUT } from './actionTypes';

const defaultUser = {
	isAuth: localStorage.getItem('token') ? true : false,
	name: JSON.parse(localStorage.getItem('user'))?.name || '',
	email: JSON.parse(localStorage.getItem('user'))?.email || '',
	token: localStorage.getItem('token') || '',
};

const userReducer = (state = defaultUser, action) => {
	switch (action.type) {
		case LOGIN:
			return { ...action.payload };
		case LOGOUT:
			return {
				isAuth: false,
				name: '',
				email: '',
				token: '',
			};
		default:
			return state;
	}
};

export { userReducer };
