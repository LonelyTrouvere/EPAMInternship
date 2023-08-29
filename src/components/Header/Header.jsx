import { Logo } from '../Logo/Logo';
import { Button } from 'components/common/Button/Button';
import { Link } from 'react-router-dom';
import { useUser } from 'utils/hooks/useUser';
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from 'utils/routes/routes';

const Header = () => {
	const [user, setUser] = useUser();

	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('name');
		setUser({
			token: '',
			name: '',
		});
	};

	return (
		<div className='relative flex items-center border-2 border-orange-400 py-2'>
			<div className='h-20'>
				<Link to={HOME_ROUTE}>
					<Logo />
				</Link>
			</div>
			<div className='absolute right-0 mr-5'>
				{user.token ? (
					<>
						<span className='text-2xl mr-4'>{user.name}</span>
						<Button text='Log out' onClick={handleLogout}></Button>
					</>
				) : (
					<>
						<Link to={LOGIN_ROUTE}>
							<Button text='Log in' />
						</Link>
						<Link to={REGISTER_ROUTE}>
							<Button text='Sign up' />
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export { Header };
