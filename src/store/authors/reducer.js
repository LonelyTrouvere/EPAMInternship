import { getAuthorsFromAPI } from 'servisec';
import { GET_AUTHORS, ADD_AUTHOR } from './actionTypes';

const defaultAuthors = {
	authors: await getAuthorsFromAPI(),
};

const authorsReducer = (state = defaultAuthors, action) => {
	switch (action.type) {
		case ADD_AUTHOR:
			return { ...state, authors: [...state.authors, action.payload] };
		case GET_AUTHORS:
			return { ...state, authors: action.payload };
		default:
			return state;
	}
};

export { authorsReducer };
