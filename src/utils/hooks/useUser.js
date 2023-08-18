import { UserContext } from 'contexts/UserContext';
import { useContext } from 'react';

const useUser = () => {
	const user = useContext(UserContext);

	return [user.user, user.setUser];
};

export { useUser };
