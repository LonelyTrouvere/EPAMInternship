import { AuthorContext } from 'contexts/AuthorContext';
import { useContext } from 'react';

const useAuthorsByID = (id) => {
	const authors = useContext(AuthorContext);

	let authorByID;
	if (Array.isArray(id)) {
		authorByID = authors.authorList.filter((item) => id.includes(item.id));
		console.log(authors.authorList);
	} else {
		authorByID = authors.authorList.find((item) => item.id === id);
	}

	return authorByID;
};

export { useAuthorsByID };
