import { Button } from 'components/common/Button/Button';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { COURSES_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from 'constants/routes';

const MainPage = () => {
	const navigate = useNavigate();

	return (
		<div className='p-5 text-center flex flex-col justify-center items-center'>
			<div className='text-xl leading-8'>
				<h1 className='font-bold text-4xl mb-4'>Welcome</h1>
				<p className='mb-4'>
					This is a course finding website <br />
					We are happy to help you find the best and most suiting course for you
					<br />
					If you are ready, click button below to explore the world of knowledge
				</p>
				<Button
					text='Explore courses!'
					onClick={() => navigate(COURSES_ROUTE)}
				/>
			</div>
			<div>
				<p>
					If you are not logged in, please{' '}
					<Link
						className='font-medium text-blue-500 hover:underline hover:text-red-500 visited:text-blue-800'
						to={LOGIN_ROUTE}
					>
						Log in
					</Link>{' '}
					or{' '}
					<Link
						className='font-medium text-blue-500 hover:underline hover:text-red-500 visited:text-blue-800'
						to={REGISTER_ROUTE}
					>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
};

export { MainPage };
