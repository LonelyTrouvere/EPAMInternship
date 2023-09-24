import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from 'components/common/Input/Input';
import { Button } from 'components/common/Button/Button';
import { COURSES_ROUTE, REGISTER_ROUTE } from 'constants/routes';
import { useDispatch } from 'react-redux';
import { loginAction } from 'store/user/actionCreators';
import { loginUser } from 'services';
import { fetchUser, loginThunk } from 'store/user/thunk';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const onLogin = async (e) => {
		try {
			e.preventDefault();
			const user = {
				password,
				email,
			};

			dispatch(loginThunk(user));

			navigate(COURSES_ROUTE);
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		<>
			<form
				className='relative w-fit top-[5rem] m-auto text-xl'
				onSubmit={onLogin}
			>
				<h1 className='text-3xl font-bold text-center mb-8'>Log in</h1>
				<Input
					labelText='Email'
					type='text'
					placeholder='Enter email'
					className='w-[40rem] mb-6'
					onChange={handleEmail}
				/>
				<Input
					labelText='Password'
					type='password'
					placeholder='Enter password'
					className='w-[40rem] mb-6'
					onChange={handlePassword}
				/>
				<Button className='block mb-3 m-auto' type='submit'>
					Log in
				</Button>
				<p className='text-base text-center'>
					If you don&apos;t an account you can{' '}
					<Link
						className='font-medium text-blue-500 hover:underline hover:text-red-500 visited:text-blue-800'
						to={REGISTER_ROUTE}
					>
						Sign up
					</Link>
				</p>
			</form>
		</>
	);
};

export { Login };
