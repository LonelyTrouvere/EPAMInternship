import { addAuthor, getAuthorsFromAPI } from 'services';
import { addAuthorAction, getAuthorsAction } from './actionCreators';

const fetchAuthors = () => {
	return async (dispatch) => {
		const authors = await getAuthorsFromAPI();
		dispatch(getAuthorsAction(authors));
	};
};

const addAuthorThunk = (author) => {
	return async (dispatch) => {
		const data = await addAuthor(author);
		dispatch(addAuthorAction(data));
	};
};

export { fetchAuthors, addAuthorThunk };
