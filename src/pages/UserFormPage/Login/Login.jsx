import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '../../../components/common/Input/Input';
import { Button } from '../../../components/common/Button/Button';
import { UserContext } from '../../../contexts/context';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const redirect = useNavigate();

	const logedUser = useContext(UserContext);

	const handleChange = (newState, setState) => {
		setState(newState);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const user = {
			password,
			email,
		};

		fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((data) => data.json())
			.then((data) => {
				if (data.successful) {
					localStorage.setItem('token', data.result.replace('Bearer ', ''));
					localStorage.setItem('name', data.user.name);
					logedUser.set({
						name: data.user.name,
						token: data.result.replace('Bearer ', ''),
					});
				} else {
					throw new Error('Something went wrong');
				}
			})
			.then(() => {
				redirect('/');
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<form
				className='relative w-fit top-[5rem] left-[27%] text-xl'
				onSubmit={handleLogin}
			>
				<h1 className='text-3xl font-bold text-center mb-8'>Log in</h1>
				<Input
					labelText='Email'
					type='text'
					placeholder='Enter email'
					className='w-[40rem] mb-6'
					onChange={(e) => {
						handleChange(e.target.value, setEmail);
					}}
				/>
				<Input
					labelText='Password'
					type='password'
					placeholder='Enter password'
					className='w-[40rem] mb-6'
					onChange={(e) => {
						handleChange(e.target.value, setPassword);
					}}
				/>
				<Button text='Log in' className='block mb-3 m-auto' type='submit' />
				<p className='text-base text-center'>
					If you don&apos;t an account you can{' '}
					<Link
						className='font-medium text-blue-500 hover:underline hover:text-red-500 visited:text-blue-800'
						to='/registration'
					>
						Sign up
					</Link>
				</p>
			</form>
		</>
	);
};

export { Login };
