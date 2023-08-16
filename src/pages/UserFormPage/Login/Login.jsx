import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MessageBox } from '../../../components/common/MessageBox/MessageBox';
import { Input } from '../../../components/common/Input/Input';
import { Button } from '../../../components/common/Button/Button';
import { UserContext } from '../../../contexts/context';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [boxMessage, setBoxMessage] = useState('');

	const redirect = useNavigate();

	const logedUser = useContext(UserContext);

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
			.catch((err) => setBoxMessage(err.toString()));
	};

	return (
		<>
			{boxMessage && <MessageBox status='error' message={boxMessage} />}
			<form className='form' onSubmit={handleLogin}>
				<h1 className='form-header'>Log in</h1>
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
				<Button text='Log in' className='form-button' type='submit' />
				<p>
					If you don&apos;t an account you can{' '}
					<Link to='/registration'>Sign up</Link>
				</p>
			</form>
		</>
	);
};

export { Login };
