import { AuthorContext } from 'contexts/AuthorContext';
import { useContext } from 'react';

const useAuthors = () => {
	const authors = useContext(AuthorContext);

	return [authors.authorList, authors.setAuthorList];
};

export { useAuthors };
