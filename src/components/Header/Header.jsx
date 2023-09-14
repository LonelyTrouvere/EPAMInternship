import { Logo } from '../Logo/Logo';
import { Button } from 'components/common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HOME_PAGE_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from 'constants/routes';
import { logoutAction } from 'store/user/actionCreators';

const Header = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		dispatch(logoutAction());
		navigate(LOGIN_ROUTE);
	};

	return (
		<div className='relative flex items-center border-2 border-orange-400 py-2'>
			<div className='h-20'>
				<Link to={HOME_PAGE_ROUTE}>
					<Logo />
				</Link>
			</div>
			<div className='absolute right-0 mr-5'>
				{user.isAuth ? (
					<>
						<span className='text-2xl mr-4'>{user.name}</span>
						<Button onClick={handleLogout}>Log out</Button>
					</>
				) : (
					<>
						<Button onClick={() => navigate(LOGIN_ROUTE)}>Log in</Button>
						<Button onClick={() => navigate(REGISTER_ROUTE)}>Sign in</Button>
					</>
				)}
			</div>
		</div>
	);
};

export { Header };
