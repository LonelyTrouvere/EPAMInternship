import './Header.css';
import { Logo } from './Logo/Logo';
import { Button } from '../common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/context';

const Header = () => {
	const user = useContext(UserContext);
	const redirect = useNavigate();

	const handleLogout = () => {
		const response = fetch('http://localhost:4000/logout', {
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${user.info.token}`,
			},
		});

		localStorage.removeItem('token');
		localStorage.removeItem('name');
		user.set({
			token: localStorage.getItem('token'),
			name: '',
		});
		redirect('/login');
	};

	return (
		<div className='head'>
			<div className='logo-holder'>
				<Link to='/'>
					<Logo />
				</Link>
			</div>
			<div className='far-end'>
				{!user.info.token && (
					<>
						<Link to='/login'>
							<Button text='Log in' />
						</Link>
						<Link to='/registration'>
							<Button text='Sign up' />
						</Link>
					</>
				)}
				{user.info.name && (
					<>
						<span>{user.info.name}</span>
						<Button text='Log out' onClick={handleLogout}></Button>
					</>
				)}
			</div>
		</div>
	);
};

export { Header };
