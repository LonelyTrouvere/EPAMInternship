import { getAuthorsFromAPI } from 'services';
import { getAuthorsAction } from './actionCreators';

const fetchAuthors = () => {
	return async (dispatch) => {
		const authors = await getAuthorsFromAPI();
		dispatch(getAuthorsAction(authors));
	};
};

export { fetchAuthors };
