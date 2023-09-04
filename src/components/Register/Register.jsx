import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'components/common/Button/Button';
import { Input } from 'components/common/Input/Input';
import { LOGIN_ROUTE } from 'constants/routes';
import { registerUser } from 'servisec';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleName = (e) => {
		setName(e.target.value);
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const onRegister = async (e) => {
		try {
			e.preventDefault();

			const user = {
				name,
				password,
				email,
			};

			await registerUser(user);

			navigate(LOGIN_ROUTE);
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		<form
			className='relative w-fit top-[4rem] m-auto text-xl'
			onSubmit={onRegister}
		>
			<h1 className='text-3xl font-bold text-center mb-8'>Registration</h1>
			<Input
				labelText='Name'
				type='text'
				placeholder='Enter name'
				className='w-[40rem] mb-6'
				onChange={handleName}
			/>
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
				Registration
			</Button>
			<p className='text-base text-center'>
				If you have an account you can{' '}
				<Link
					to={LOGIN_ROUTE}
					className='font-medium text-blue-500 hover:underline hover:text-red-500 visited:text-blue-800'
				>
					Log in
				</Link>
			</p>
		</form>
	);
};

export { Register };
