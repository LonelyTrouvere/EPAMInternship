import { useNavigate, useParams } from 'react-router';
import { Button } from 'components/common/Button/Button';
import { displayDuration } from 'utils/time/displayDuration';
import { useCourseByID } from 'utils/hooks/useCourseByID';
import { useAuthorsByID } from 'utils/hooks/useAuthorByID';

const CourseInfo = () => {
	const { id } = useParams();
	const course = useCourseByID(id);
	const courseAuthors = useAuthorsByID(course.authors);
	console.log(courseAuthors);

	const navigate = useNavigate();

	let { hours, minutes } = displayDuration(course.duration);

	return (
		<>
			<Button
				text=' < Back to courses'
				onClick={() => {
					navigate('/courses');
				}}
			/>
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
