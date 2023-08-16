import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MessageBox } from '../../../components/common/MessageBox/MessageBox';
import { Button } from '../../../components/common/Button/Button';
import { Input } from 'components/common/Input/Input';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [boxMessage, setBoxMessage] = useState('');

	const redirect = useNavigate();

	const handleChange = (newState, setState) => {
		setBoxMessage('');
		setState(newState);
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		const user = {
			name,
			password,
			email,
		};
		fetch(`${process.env.REACT_APP_BASE_URL}/register`, {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((data) => data.json())
			.then((data) => {
				if (!data.successful) {
					throw new Error(data.errors[0]);
				} else {
					redirect('/login');
				}
			})
			.catch((err) => setBoxMessage(err.toString()));
	};

	return (
		<>
			{boxMessage && <MessageBox status='error' message={boxMessage} />}
			<form className='form' onSubmit={handleRegister}>
				<h1 className='form-header'>Registration</h1>
				<Input
					labelText='Name'
					type='text'
					placeholder='Enter name'
					onChange={(e) => {
						handleChange(e.target.value, setName);
					}}
				/>
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
				<Button text='Registration' className='form-button' type='submit' />
				<p>
					If you have an account you can <Link to='/login'>Log in</Link>
				</p>
			</form>
		</>
	);
};

export { Register };
