import '../Form.css';
import { Input } from '../../../components/common/Input/Input';
import { Button } from '../../../components/common/Button/Button';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<form className='form'>
			<h1 className='form-header'>Log in</h1>
			<Input labelText='Email' type='text' placeholder='Enter email' />
			<Input
				labelText='Password'
				type='password'
				placeholder='Enter password'
			/>
			<Button text='Log in' className='form-button' />
			<p>
				If you don't have any account you can{' '}
				<Link to='/registration'>Register</Link>
			</p>
		</form>
	);
};

export { Login };
