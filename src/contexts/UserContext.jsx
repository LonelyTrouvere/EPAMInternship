import { useState, createContext } from 'react';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState({
		token: localStorage.getItem('token'),
		name: localStorage.getItem('name'),
	});

	return (
		<UserContext.Provider value={{ user: user, setUser: setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export { UserContext, UserContextProvider };
