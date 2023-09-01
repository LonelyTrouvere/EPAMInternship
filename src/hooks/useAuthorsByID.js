import { useSelector } from 'react-redux';

const useAuthorsByID = (id) => {
	const authors = useSelector((state) => state.authors.authors);

	let authorByID;
	if (Array.isArray(id)) {
		authorByID = authors.filter((item) => id.includes(item.id));
	} else {
		authorByID = authors.find((item) => item.id === id);
	}

	return authorByID;
};

export { useAuthorsByID };
