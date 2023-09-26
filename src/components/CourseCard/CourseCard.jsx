import { Button } from 'components/common/Button/Button';
import { useNavigate } from 'react-router';
import { displayDuration } from 'utils/displayDuration';
import { useDispatch, useSelector } from 'react-redux';
import { SmallButton } from 'components/common/SmallButton/SmallButton';
import { deleteCourseThunk } from 'store/courses/thunk';

const CourseCard = ({ course }) => {
	const authors = useSelector((state) => state.authors.authors);
	const role = useSelector((state) => state.user.role);
	const isAdmin = role === 'admin';
	const { hours, minutes } = displayDuration(course.duration);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onDelete = () => {
		dispatch(deleteCourseThunk(course.id));
	};

	return (
		<div className='p-4 pt-6 my-6 flex gap-6 border-2 border-green-500'>
			<div className='w-3/4'>
				<h3 className='font-bold text-3xl mb-6'>{course.title}</h3>
				<p className='leading-7'>{course.description}</p>
			</div>
			<div className='leading-9 w-1/4'>
				<p>
					<b>Authors:</b>{' '}
					{authors
						.filter((item) => course.authors.includes(item.id))
						.map((item, index) => {
							if (index === authors.length - 1)
								return <span key={item.id}>{item.name}</span>;
							else return <span key={item.id}>{item.name}, </span>;
						})}
				</p>
				<p>
					<b>Duration:</b> {hours}:{minutes} hours
				</p>
				<p>
					<b>Created:</b> {course.creationDate}
				</p>
				<div className='mt-3 flex flex-row gap-4'>
					<Button
						onClick={() => {
							navigate(`/courses/${course.id}`);
						}}
					>
						Show course
					</Button>
					{isAdmin && (
						<SmallButton className='w-14' onClick={onDelete}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								width='35'
								height='35'
								viewBox='0 0 32 32'
							>
								<path d='M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z'></path>
							</svg>
						</SmallButton>
					)}
					{isAdmin && (
						<SmallButton
							className='w-14'
							onClick={() => navigate(`/courses/update/${course.id}`)}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='35px'
								height='35px'
								viewBox='0 0 24 24'
								fill='none'
							>
								<path
									d='M18.3282 8.32837L15.8939 5.89405C14.7058 4.706 14.1118 4.11198 13.4268 3.88941C12.8243 3.69364 12.1752 3.69364 11.5727 3.88941C10.8877 4.11198 10.2937 4.706 9.10564 5.89405L7.49975 7.49994M3 20.9997L3.04745 20.6675C3.21536 19.4922 3.29932 18.9045 3.49029 18.3558C3.65975 17.8689 3.89124 17.4059 4.17906 16.9783C4.50341 16.4963 4.92319 16.0765 5.76274 15.237L17.4107 3.58896C18.1918 2.80791 19.4581 2.80791 20.2392 3.58896C21.0202 4.37001 21.0202 5.63634 20.2392 6.41739L8.37744 18.2791C7.61579 19.0408 7.23497 19.4216 6.8012 19.7244C6.41618 19.9932 6.00093 20.2159 5.56398 20.3879C5.07171 20.5817 4.54375 20.6882 3.48793 20.9012L3 20.9997Z'
									stroke='#000000'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</SmallButton>
					)}
				</div>
			</div>
		</div>
	);
};

export { CourseCard };
