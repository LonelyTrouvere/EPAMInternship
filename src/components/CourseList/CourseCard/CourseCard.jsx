import { Button } from 'components/common/Button/Button';
import { useNavigate } from 'react-router';
import { displayDuration } from 'utils/time/displayDuration';
import { useAuthors } from 'utils/hooks/useAuthors';

const CourseCard = ({ course }) => {
	const authors = useAuthors();
	let { hours, minutes } = displayDuration(course.duration);

	const redirect = useNavigate();

	return (
		<div className='p-4 pt-6 my-6 flex gap-6 border-2 border-green-500'>
			<div className='w-3/4'>
				<h3 className='font-bold text-3xl mb-6'>{course.title}</h3>
				<p className='leading-7'>{course.description}</p>
			</div>
			<div className='leading-9 w-1/4'>
				<p>
					<b>Authors:</b>{' '}
					{authors.list
						.filter((item) => course.authors.includes(item.id))
						.map((item, index) => {
							if (index === authors.list.length - 1)
								return <span key={item.id}>{item.name}</span>;
							else return <span key={item.id}>{item.name}, </span>;
						})}{' '}
				</p>
				<p>
					<b>Duration:</b> {hours}:{minutes} hours
				</p>
				<p>
					<b>Created:</b> {course.creationDate}
				</p>
				<div className='ml-[25%]'>
					<Button
						text='Show course'
						className='mt-3'
						onClick={() => {
							redirect(`/courses/${course.id}`);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export { CourseCard };
