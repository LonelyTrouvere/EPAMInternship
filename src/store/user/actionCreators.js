const { LOGIN, LOGOUT } = require('./actionTypes');

const loginAction = (payload) => ({ type: LOGIN, payload });

const logoutAction = () => ({ type: LOGOUT });

export { loginAction, logoutAction };
