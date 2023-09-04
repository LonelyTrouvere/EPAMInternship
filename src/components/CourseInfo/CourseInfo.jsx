import { useNavigate, useParams } from 'react-router';
import { Button } from 'components/common/Button/Button';
import { displayDuration } from 'utils/displayDuration';
import { COURSES_ROUTE } from 'constants/routes';
import { useCourseByID } from 'hooks/useCourseByID';
import { useAuthorsByID } from 'hooks/useAuthorsByID';

const CourseInfo = () => {
	const { id } = useParams();
	const course = useCourseByID(id);
	const courseAuthors = useAuthorsByID(course.authors);

	const navigate = useNavigate();

	const { hours, minutes } = displayDuration(course.duration);

	return (
		<>
			<Button
				onClick={() => {
					navigate(COURSES_ROUTE);
				}}
			>
				{' '}
				Back to courses
			</Button>
			<div className='text-xl'>
				<h1 className='text-center text-5xl font-bold mb-16'>{course.title}</h1>
				<div className='flex gap-10'>
					<div className='w-2/3 leading-7'>{course.description}</div>
					<div className='w-1/3 leading-10'>
						<div>
							<b>ID:</b> {course.id}
						</div>
						<div>
							<b>Duration:</b> {hours}:{minutes}
						</div>
						<div>
							<b>Created:</b> {course.creationDate}
						</div>
						<div className='leading-8'>
							<span className='block mb-2'>
								<b>Authors:</b>{' '}
							</span>
							{courseAuthors.map((item) => (
								<div>{item.name}</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export { CourseInfo };
