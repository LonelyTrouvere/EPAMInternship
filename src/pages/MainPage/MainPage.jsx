import { Button } from '../../components/common/Button/Button';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const MainPage = () => {
	const redirect = useNavigate();

	return (
		<div className='mainContainer'>
			<div className='mainHeader'>
				<h1>Welcome</h1>
				<p>
					This is a course finding website <br />
					We are happy to help you find the best and most suiting course for you
					<br />
					If you are ready, click button below to explore the world of knowledge
				</p>
				<Button text='Explore courses!' onClick={() => redirect('/courses')} />
			</div>
			<div className='mainRedirect'>
				<p>
					If you are not logged in, please <Link to='/login'>Log in</Link> or{' '}
					<Link to='/registration'>Sign up</Link>
				</p>
			</div>
		</div>
	);
};

export { MainPage };
