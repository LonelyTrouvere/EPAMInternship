const getCoursesFromAPI = async () => {
	const response = await fetch(`${process.env.REACT_APP_BASE_URL}/courses/all`);
	const data = await response.json();

	return data.result;
};

const getAuthorsFromAPI = async () => {
	const response = await fetch(`${process.env.REACT_APP_BASE_URL}/authors/all`);
	const data = await response.json();

	return data.result;
};

const userMe = async (token) => {
	const response = await fetch(`${process.env.REACT_APP_BASE_URL}/users/me`, {
		method: 'GET',
		headers: {
			Authorization: token,
		},
	});
	const data = await response.json();

	if (!response.ok) throw new Error(data.result);

	return data.result;
};

const logout = async () => {
	await fetch(`${process.env.REACT_APP_BASE_URL}/logout`, {
		method: 'DELETE',
		headers: {
			Authorization: localStorage.getItem('token'),
		},
	});
};

const loginUser = async (user) => {
	const response = await fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
		method: 'POST',
		body: JSON.stringify(user),
		headers: {
			'content-type': 'application/json',
		},
	});
	const data = await response.json();

	if (!response.ok) throw new Error(data.errors[0] || data.result);

	return data;
};

const registerUser = async (user) => {
	const response = await fetch(`${process.env.REACT_APP_BASE_URL}/register`, {
		method: 'POST',
		body: JSON.stringify(user),
		headers: {
			'content-type': 'application/json',
		},
	});

	const data = await response.json();
	if (!response.ok) throw new Error(data.errors[0]);

	return data;
};

export {
	getCoursesFromAPI,
	getAuthorsFromAPI,
	loginUser,
	registerUser,
	userMe,
	logout,
};
