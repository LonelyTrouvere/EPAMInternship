import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'components/common/Button/Button';
import { Input } from 'components/common/Input/Input';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleChange = (newState, setState) => {
		setState(newState);
	};

	const handleRegister = async (e) => {
		try {
			e.preventDefault();

			const user = {
				name,
				password,
				email,
			};

			const response = await fetch(
				`${process.env.REACT_APP_BASE_URL}/register`,
				{
					method: 'POST',
					body: JSON.stringify(user),
					headers: {
						'content-type': 'application/json',
					},
				}
			);

			const data = await response.json();
			if (!response.ok) throw new Error(data.errors[0]);

			navigate('/login');
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		<form
			className='relative w-fit top-[4rem] left-[27%] text-xl'
			onSubmit={handleRegister}
		>
			<h1 className='text-3xl font-bold text-center mb-8'>Registration</h1>
			<Input
				labelText='Name'
				type='text'
				placeholder='Enter name'
				className='w-[40rem] mb-6'
				onChange={(e) => {
					handleChange(e.target.value, setName);
				}}
			/>
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
			<Button text='Registration' className='block mb-3 m-auto' type='submit' />
			<p className='text-base text-center'>
				If you have an account you can{' '}
				<Link
					to='/login'
					className='font-medium text-blue-500 hover:underline hover:text-red-500 visited:text-blue-800'
				>
					Log in
				</Link>
			</p>
		</form>
	);
};

export { Register };
