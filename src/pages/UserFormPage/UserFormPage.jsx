import './Form.css';
import { useContext, useState } from 'react';
import { Input } from '../../components/common/Input/Input';
import { Button } from '../../components/common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/context';
import { MessageBox } from '../../components/common/MessageBox/MessageBox';

const baseUrl = 'http://localhost:4000';

const loginLink = (
	<p>
		If you have an account you can <Link to='/login'>Log in</Link>
	</p>
);
const registerLink = (
	<p>
		If you don&apos;t an account you can <Link to='/registration'>Sign up</Link>
	</p>
);

const registration = 'Registration';
const login = 'Log in';

const UserFormPage = ({ selectedForm }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [boxMessage, setBoxMessage] = useState('');

	const redirect = useNavigate();

	const logedUser = useContext(UserContext);

	const link = selectedForm === 'login' ? registerLink : loginLink;
	const title = selectedForm === 'login' ? login : registration;

	const handleChange = (newState, setState) => {
		setBoxMessage('');
		setState(newState);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const user = {
			password,
			email,
		};

		const response = fetch(`${baseUrl}/login`, {
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
			.catch((err) => setBoxMessage(err.toString()));
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		const user = {
			name,
			password,
			email,
		};
		const response = fetch(`${baseUrl}/register`, {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((data) => data.json())
			.then((data) => {
				if (!data.ok) {
					throw new Error(data.errors[0]);
				} else {
					redirect('/login');
				}
			})
			.catch((err) => setBoxMessage(err.toString()));
	};

	const handleSubmit = selectedForm === 'login' ? handleLogin : handleRegister;

	return (
		<>
			{boxMessage && <MessageBox status='error' message={boxMessage} />}
			<form className='form' onSubmit={handleSubmit}>
				<h1 className='form-header'>{title}</h1>
				{selectedForm === 'register' && (
					<Input
						labelText='Name'
						type='text'
						placeholder='Enter name'
						onChange={(e) => {
							handleChange(e.target.value, setName);
						}}
					/>
				)}
				<Input
					labelText='Email'
					type='text'
					placeholder='Enter email'
					onChange={(e) => {
						handleChange(e.target.value, setEmail);
					}}
				/>
				<Input
					labelText='Password'
					type='password'
					placeholder='Enter password'
					onChange={(e) => {
						handleChange(e.target.value, setPassword);
					}}
				/>
				<Button text={title} className='form-button' type='submit' />
				{link}
			</form>
		</>
	);
};

export { UserFormPage };
