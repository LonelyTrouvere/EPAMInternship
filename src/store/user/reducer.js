import { LOGIN, LOGOUT } from './actionTypes';

const defaultUser = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

const userReducer = (state = defaultUser, action) => {
	switch (action.type) {
		case LOGIN:
			return { ...action.payload };
		case LOGOUT:
			return { ...defaultUser };
		default:
			return state;
	}
};

export { userReducer };
