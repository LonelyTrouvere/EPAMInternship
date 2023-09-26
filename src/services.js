const getCoursesFromAPI = async () => {
	const response = await fetch(`${process.env.REACT_APP_BASE_URL}/courses/all`);
	const data = await response.json();

	return data.result;
};

const addCourse = async (course) => {
	const response = await fetch(
		`${process.env.REACT_APP_BASE_URL}/courses/add`,
		{
			method: 'POST',
			body: JSON.stringify(course),
			headers: {
				'content-type': 'application/json',
				Authorization: localStorage.getItem('token'),
			},
		}
	);
	const data = await response.json();

	if (!response.ok) throw new Error(data.result);

	return data.result;
};

const deleteCourse = async (id) => {
	await fetch(`${process.env.REACT_APP_BASE_URL}/courses/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: localStorage.getItem('token'),
		},
	});
};

const updateCourse = async (id, course) => {
	const response = await fetch(
		`${process.env.REACT_APP_BASE_URL}/courses/${id}`,
		{
			method: 'PUT',
			body: JSON.stringify(course),
			headers: {
				'content-type': 'application/json',
				Authorization: localStorage.getItem('token'),
			},
		}
	);
	const data = await response.json();
	if (!response.ok) throw new Error(data.result);

	return data.result;
};

const getAuthorsFromAPI = async () => {
	const response = await fetch(`${process.env.REACT_APP_BASE_URL}/authors/all`);
	const data = await response.json();

	return data.result;
};

const addAuthor = async (author) => {
	const response = await fetch(
		`${process.env.REACT_APP_BASE_URL}/authors/add`,
		{
			method: 'POST',
			body: JSON.stringify(author),
			headers: {
				'content-type': 'application/json',
				Authorization: localStorage.getItem('token'),
			},
		}
	);

	const data = await response.json();

	if (!response.ok) throw new Error(data.result);

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
	addCourse,
	deleteCourse,
	updateCourse,
	getAuthorsFromAPI,
	addAuthor,
	loginUser,
	registerUser,
	userMe,
	logout,
};
