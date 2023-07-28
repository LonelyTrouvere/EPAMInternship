import './CourseInfo.css';
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
			<div className='main-info-holder'>
				<h1>{course.title}</h1>
				<div className='main-info'>
					<div className='info-description'>{course.description}</div>
					<div className='info-side'>
						<div>
							<b>ID:</b> {course.id}
						</div>
						<div>
							<b>Duration:</b> {hours}:{minutes}
						</div>
						<div>
							<b>Created:</b> {course.creationDate}
						</div>
						<div className='info-authors'>
							<span>
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
