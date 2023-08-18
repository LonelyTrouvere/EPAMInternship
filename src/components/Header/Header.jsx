import { Logo } from '../Logo/Logo';
import { Button } from 'components/common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from 'utils/hooks/useUser';

const Header = () => {
	const [user, setUser] = useUser();
	const navigate = useNavigate();

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
				<Link to='/'>
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
						<Link to='/login'>
							<Button text='Log in' />
						</Link>
						<Link to='/registration'>
							<Button text='Sign up' />
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export { Header };
