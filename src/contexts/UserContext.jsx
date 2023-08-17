import { useState, createContext } from 'react';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	const [logedUser, setLogedUser] = useState({
		token: localStorage.getItem('token'),
		name: localStorage.getItem('name'),
	});

	return (
		<UserContext.Provider value={{ info: logedUser, set: setLogedUser }}>
			{children}
		</UserContext.Provider>
	);
};

export { UserContext, UserContextProvider };
