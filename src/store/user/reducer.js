import { LOGIN, LOGOUT } from './actionTypes';

const defaultUser = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

const userReducer = (state = defaultUser, action) => {
	switch (action.type) {
		case LOGIN:
			return { ...state, ...action.payload };
		case LOGOUT:
			return {
				isAuth: false,
				name: '',
				email: '',
				token: '',
				role: '',
			};
		default:
			return state;
	}
};

export { userReducer };
