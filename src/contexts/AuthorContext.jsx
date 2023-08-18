import { MOCKED_AUTHOR_LIST } from 'assets/mockedData/mockedData';
import { useState, createContext } from 'react';

const AuthorContext = createContext();

const AuthorContextProvider = ({ children }) => {
	const [authorList, setAuthorList] = useState(MOCKED_AUTHOR_LIST);

	return (
		<AuthorContext.Provider
			value={{ authorList: authorList, setAuthorList: setAuthorList }}
		>
			{children}
		</AuthorContext.Provider>
	);
};

export { AuthorContext, AuthorContextProvider };
