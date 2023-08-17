import { useNavigate, useParams } from 'react-router';
import { useContext } from 'react';
import { AuthorContext, CourseContext } from '../../../contexts/context';
import { Button } from '../../common/Button/Button';
import { displayDuration } from '../../../utils/time/displayDuration';

const CourseInfo = () => {
	const { id } = useParams();
	const course = useContext(CourseContext).list.find((item) => item.id === id);
	const courseAuthors = useContext(AuthorContext).list.filter((item) =>
		course.authors.includes(item.id)
	);

	const redirect = useNavigate();

	let { hours, minutes } = displayDuration(course.duration);

	return (
		<>
			<Button
				text=' < Back to courses'
				onClick={() => {
					redirect('/courses');
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
								<b>Authosr:</b>{' '}
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
